import { StyleSheet} from 'react-native'
import { scale, verticalScale } from '../../Components/Scaling/Scale'


export const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent:"center",
        alignItems:"center" 
    },
    subContainer:{ 
        backgroundColor: "white", 
        width: "90%", 
        justifyContent: "center", 
        alignItems: "center",
        elevation:10,
        shadowColor:"blue" ,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4, 
    },
    header:{
         position: "absolute", 
         top: verticalScale(60), 
         left: scale(30), 
         flexDirection: "row", 
         alignItems: "center", 
         justifyContent: "center" 
        },
        headerText:{ 
            fontSize: 16, 
            color: "black", 
            marginLeft: scale(15), 
            fontWeight: "500" 
        },
        registerButton:{ 
            width: scale(300), 
            marginTop: verticalScale(50), 
            marginBottom: verticalScale(20) 
        },
        


})