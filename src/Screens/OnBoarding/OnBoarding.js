import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './OnBoarding_styles'
import Buttons from '../../Components/Buttons/Buttons'
import { scale, verticalScale } from '../../Components/Scaling/Scale'
import { useNavigation } from '@react-navigation/native'

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/7692/7692809.png" }} style={{ width: 100, height: 100, alignSelf: "center" }} />
        <Text style={styles.titleText}>To-Do List App</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => navigation.navigate("Registration")}>
          <Buttons name={"Register"} />
        </Pressable>
        <Pressable style={{ marginTop: verticalScale(10) }} onPress={() => navigation.navigate("Login")} >
          <Buttons name={"Login"} />
        </Pressable>
      </View>
    </View>
  )
}

export default OnBoarding
