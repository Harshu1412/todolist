import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/Navigations/StackNavigation';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB7SaxaqnAKm-o_4lNwESTE9x84lYGZ4e4",
  authDomain: "to-do-list-app-31821.firebaseapp.com",
  projectId: "to-do-list-app-31821",
  storageBucket: "to-do-list-app-31821.appspot.com",
  messagingSenderId: "1097513915556",
  appId: "1:1097513915556:web:03edbe232dc97f6a524231"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
const firestoreDB = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
export const db = getFirestore(app);
// export const storage=getStorage();

export default function App() {
  
  return (
    <>
    <NavigationContainer>
      <StackNavigation/>
      <StatusBar style="auto" />
      </NavigationContainer>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
