import { StyleSheet, Text, View,Pressable,Modal, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { scale, verticalScale } from '../../Components/Scaling/Scale';

const MainScreen = () => {
  const [add,setAdd]=useState(false)
  const[task,setTask]=useState("")
  useEffect(()=>{
    getDataa()
  },[])
  const getDataa=async()=>{
   const a= await AsyncStorage.getItem("user")
   console.log(a);
  }
  return (
    <View style={{flex:1}}>
      <KeyboardAvoidingView style={{flex:1}} behavior='height' enabled={false}>

     <Pressable onPress={()=>setAdd(true)} style={{position:"absolute" ,bottom:10,right:20}}>
     <Ionicons name="md-add-circle-sharp" size={74} color="black" />
     </Pressable>
     
     <Modal animationType="none" transparent={true} visible={add} onRequestClose={()=>setAdd(false)}>
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <View style={{backgroundColor: "white", 
        width: "90%", 
        height:"30%",
        alignItems: "center",
        elevation:10,
        shadowColor:"blue" ,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4, }}>
          <Text style={{fontSize:24,fontWeight:"bold",marginTop:verticalScale(30)}}>Add Task</Text>
          <TextInput  
          value={task}
          autoFocus={true}
          label={"Enter Task"} 
          mode='outlined' 
          style={{width:scale(300)}} 
          onChangeText={(text) => setTask(text)}/>
    </View>
    
  </View>
</Modal>
</KeyboardAvoidingView>

    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})