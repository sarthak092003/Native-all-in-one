import { StyleSheet, TextInput, View,Text } from "react-native"
import colors from "../constants/colors"

export const Input  =(props)=>{
    return(
        <View style = {[styles.inputContainer,props.style]}>
            {props.label?<Text>{props.label}</Text>:null}
            <TextInput placeholder={props.placeholder} onChangeText= {props.onChangeText} style = {styles.input} placeholderTextColor= {colors.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        paddingHorizontal:7,
        marginVertical:20,
        width:350,
        marginHorizontal:0,
        justifyContent:'center',
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center",
        backgroundColor:colors.quiteBlack,
        borderWidth:1,
        borderRadius:10,
        height:40,
        borderColor:colors.white
    },
    input:{
        width:"100%",
        color:colors.white,
        fontWeight:'bold',
        letterSpacing:0.3,
        fontSize:20
    }
})