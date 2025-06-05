import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const Row = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={styles.root}>{children}</View>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flex: 1,
        gap: 10,
      },
})

export default Row