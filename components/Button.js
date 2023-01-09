import { StyleSheet, TouchableOpacity, View,Text } from "react-native"
import colors from "../constants/colors"

export const  Button  = (props)=>{
    return(
        <View style = {[styles.ButtonContainer,props.style]}>
        <TouchableOpacity onPress={props.onPress} style = {styles.Button}>
            <Text style = {styles.Text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    ButtonContainer:{
        width:"100%",
        justifyContent:'center',
        alignItems:"center",
    },
    Button:{
        backgroundColor:colors.blue,
        width:'80%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },
    Text:{
        fontSize:20,
        letterSpacing:0.3,
        fontWeight:"bold"
    }



})