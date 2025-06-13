import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/colors';
export interface ColumnType<T> {
  title: string;
  key?: keyof T;
  render?: (text: T[keyof T], record: T) => React.ReactNode;
  numerization?: boolean;
  width?: number;
}

interface TableDataProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const mappingHeader = (columns: ColumnType<any>[]) => {
  return (
    <View style={[styles.row, styles.header]}>
      {columns.map((column, index) => {
        return (
          <View
            key={`header-${index}`}
            style={[
              styles.column,
              {width: column.width ?? 'auto'},
              index === columns.length - 1 && {flex: 1},
            ]}>
            <Text
              style={[
                styles.thText,
                index === columns.length - 1 && {textAlign: 'center'},
              ]}>
              {column.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const mappingBody = (columns: ColumnType<any>[], data: any[]) => {
  return (
    <View>
      {data.map((item, index) => {
        return (
          <View style={styles.row} key={`body-${index}`}>
            {columns.map(column => {
              return (
                <View style={[styles.column, {width: column.width ?? 'auto'}]}>
                  <Text style={styles.tdText}>
                    {column.numerization
                      ? index + 1
                      : column.render
                      ? column.render(item[column.key as typeof item], item)
                      : item[column.key as typeof item]}
                  </Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const TableData = ({columns, data, footer, header}: TableDataProps<any>) => {
  return (
     <View style={styles.root}>
        {header}
        <View>
          {mappingHeader(columns)}
          {mappingBody(columns, data)}
        </View>
        {footer}
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 12,
    margin: 12,
    gap: 10,
    borderColor: Colors.primary,
    borderWidth: 2,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    gap: 10,
  },
  header: {
    borderColor: Colors.primary,
    borderWidth: 0,
    borderBottomWidth: 2,
  },
  column: {},
  thText: {
    textAlign: 'left',
    fontWeight: 700,
  },
  tdText: {
    textAlign: 'left',
  },
  tdTextCenter: {
    textAlign: 'center',
  },
});

export default TableData;
