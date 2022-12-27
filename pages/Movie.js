import { useState } from "react";
import { StyleSheet,Text,TextInput,View,Button, Alert, TouchableOpacity, Modal } from "react-native"; 
import MoviePage from "../components/MoviePage";


const Search = ()=>{
    const [aboutmovie,changeabout] = useState({})
    const [movie,changeMovie] = useState('')
    const [active,changeResponse] = useState("False") 
    async function api(input){
        const response = await fetch(`http://www.omdbapi.com/?t=${input}&apikey=2f6d6e4c`)
        
        const json = await response.json();
        changeabout(json)
        changeResponse(json.Response)
        console.log(json.Poster)
     
        if (json.Response ==="False"){
            Alert.alert("No movies found with this name")
            console.log('faileed')
        }
        
        
        return json
    }
    return(
        
        <View style = {{padding:10}}>
            <TextInput
        style = {styles.text}
        onChangeText = {changeMovie}
        placeholder = "Movie"
        ></TextInput>
        <TouchableOpacity
        style = {{alignSelf:"center",width:70,marginTop:10}}
        onPress={()=>api(movie)}
        >
            <View style = {{backgroundColor:"pink",alignSelf:"center",width:70,height:40,justifyContent:"center",borderColor:"black",borderWidth:1,borderRadius:17}}>
            <Text style = {{textAlign:"center"}}>
            Search
            </Text>
            </View>
        </TouchableOpacity>
        {active==="True"? <Modal
        style = {styles.modalStyle}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
            changeResponse("False");
          }}
        ><MoviePage moviedes = {aboutmovie} movie = {movie}/></Modal>
        :null
        }
        </View>

    )
}
const styles = StyleSheet.create({
    text:{
        marginTop:40,
        height:60,
        width:"80%",
        borderRadius:20,
        alignSelf:"center",
        backgroundColor:'white',
        paddingHorizontal:20,
        borderWidth:3,
        borderColor:"black",
        
    },
    buttonStyle:{
        width:90,
        borderRadius:100,
    },
    modalStyle:{
        
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    movie:{
        width:"100%",
        height:50
    }

})
export default Search