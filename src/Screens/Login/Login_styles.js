import { StyleSheet, Text, View } from 'react-native'
import { scale } from '../../Components/Scaling/Scale'


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center" 
    },subContainer:{ 
        backgroundColor: "white", 
        width: scale(325), 
        justifyContent: "center", 
        alignItems: "center",
        elevation:10,
        shadowColor:"blue" ,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,    

    }
})