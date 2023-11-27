import { StyleSheet} from 'react-native'
import { scale } from '../../Components/Scaling/Scale'
export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:18,
        color:"black",
        fontWeight:"500"
    },
    buttonsContainer:{ 
        width: "90%",
        position:"absolute",
        bottom:10
     },
     titleText:{
        color:"red",
        fontSize:30,
        fontWeight:"700"
    }
})