import { StyleSheet} from 'react-native'
import { scale, verticalScale } from '../Scaling/Scale'


export const styles = StyleSheet.create({
    container :{
    width:"100%",
    height:verticalScale(53),
    backgroundColor:"black",
    borderRadius:scale(30),
    justifyContent:"center",
    alignItems:"center"
}
})