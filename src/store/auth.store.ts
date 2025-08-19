import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {create} from 'zustand';
import authModel from '../models/auth.model';

interface AuthStoreState {
  user: FirebaseAuthTypes.User | null;
  isLoggedIn: boolean;
  checkUser: () => void;
}

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const useAuthStore = create<AuthStoreState>(set => ({
  ...initialState,
  checkUser: () => {
    authModel.checkIsLogged(user => {
      set({user, isLoggedIn: user !== null});
    });
  },
}));
