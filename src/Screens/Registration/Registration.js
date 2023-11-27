import { Alert, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { scale, verticalScale } from '../../Components/Scaling/Scale'
import Buttons from '../../Components/Buttons/Buttons'
import { styles } from './Registration_styles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../App'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../../Components/Loader/Loader'

const Registration = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState()
  const [confirmpassword, setConfirmpassword] = useState()
  const [loader,setLoader]=useState(false)
  const auth = getAuth();
  const handleRegistration = () => {
    setLoader(true)
    if (email === null) {
      Alert.alert('Alert', 'Email cannot be null', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ]);
      setLoader(false)

    }
    else if (password !== confirmpassword) {
      Alert.alert('Alert', 'Password does not match', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ]);
      setLoader(false)
    }
    else createUserWithEmailAndPassword(auth, email, password).then(async(usercredential) => {
      const userData = usercredential.user;
      console.log("*********************", userData);
      console.log(userData.email);
      await AsyncStorage.setItem("user",userData.email)
      const userid=userData.email
      await setDoc(doc(db, "users", userid),
      {
        user:userid
      })
      setLoader(false)
      Alert.alert('Alert ',"Registered", [
        {
          text: 'Cancel',

          style: 'cancel',
        },
        { text: 'OK' },
      ])
       navigation.navigate("MainScreen")
    }).catch((e) => {
      console.log(e.toString());
      setLoader(false)
      if(e.toString()==="FirebaseError: Firebase: Error (auth/email-already-in-use).")
      Alert.alert('Alert ',"Email Already Exist", [
        {
          text: 'Cancel',

          style: 'cancel',
        },
        { text: 'OK' },
      ]);
    })
  };

  return (
    <>
    {loader &&(
      <Loader/>
    )}
    <View style={styles.container}  >
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerText}> Register</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={{ marginTop: verticalScale(30) }}>
          <TextInput 
          value={email}
          autoFocus={true}
          label={"Email"} 
          mode='outlined' 
          style={{width:scale(300)}} 
          onChangeText={(text) => setEmail(text)} />
        </View>
        <View style={{ marginTop: verticalScale(20) }}>
          <TextInput 
          value={password}
          label={"Password"} 
          mode='outlined' 
          secureTextEntry={true}
          textContentType="password"
          style={{ width: scale(300) }} 
          onChangeText={(text) => setPassword(text)} />
        </View>
        <View style={{ marginTop: verticalScale(20) }}>
          <TextInput 
          value={confirmpassword}
          label={"Confirm Password"} 
          mode='outlined' 
          secureTextEntry={true}
          textContentType="password"
          style={{ width: scale(300) }} 
          onChangeText={(text) => setConfirmpassword(text)} />
        </View>
        <Pressable onPress={handleRegistration} style={styles.registerButton}>
          <Buttons name={"Register"} />
        </Pressable>
      </View>
    </View>
    </>
  )
}

export default Registration

