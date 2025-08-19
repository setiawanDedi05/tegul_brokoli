import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const authInstance = auth();

const authModel = {
    checkIsLogged: (callback: (user: FirebaseAuthTypes.User | null) => void) => {
        authInstance.onAuthStateChanged(callback)
    }
}

export default authModel;