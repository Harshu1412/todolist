import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import Buttons from '../../Components/Buttons/Buttons'
import { scale, verticalScale } from '../../Components/Scaling/Scale'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { styles } from './Login_styles'
const Login = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}  >
      <View style={{ position: "absolute", top: verticalScale(60), left: scale(30),flexDirection:"row",alignItems:"center",justifyContent:"center" }}>
        <Pressable onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={{fontSize:16,color:"black",marginLeft:scale(15),fontWeight:"500"}}> Login</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={{ marginTop: verticalScale(30) }}>
          <TextInput label={"Email"} mode='outlined' style={{ width: scale(300) }} />
        </View>
        <View style={{ marginTop: verticalScale(20) }}>
          <TextInput label={"Password"} mode='outlined' style={{ width: scale(300) }} />
        </View>
        <View style={{ width: scale(300), marginTop: verticalScale(50), marginBottom: verticalScale(20) }}>
          <Buttons name={"Login"} />
        </View>
      </View>
    </View>
  )
}

export default Login

