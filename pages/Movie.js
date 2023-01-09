import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
import MoviePage from "../components/MoviePage";
import colors from "../constants/colors";



const Search = ({navigation}) => {
  const [aboutmovie, changeabout] = useState({});
  const [movie, changeMovie] = useState("");
  const [active, changeResponse] = useState("False");
  const [likedActive,setIsLiked] = useState(false)
  async function api(input) {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${input}&apikey=2f6d6e4c`
    );

    const json = await response.json();
    changeabout(json);
    changeResponse(json.Response);
    console.log(json.Poster);

    if (json.Response === "False") {
      Alert.alert("No movies found with this name");
      console.log("faileed");
    }

    return json;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search It!!!</Text>
      <TextInput
        style={styles.text}
        onChangeText={changeMovie}
        placeholder="Enter movie name"
        placeholderTextColor={colors.white}
      ></TextInput>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => api(movie)}
      >
        <Text style={styles.button}>Search</Text>
      </TouchableOpacity>
      {active === "True" ? (
        <Modal
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            changeResponse("False");
          }}
        >
          <MoviePage moviedes={aboutmovie} movie={movie} />
        </Modal>
      ) : null}
      <TouchableOpacity style = {styles.buttonContainer} onPress={()=>{
        setIsLiked(!likedActive)
        navigation.navigate("Like",{
            active:likedActive

        })
      }}>
        <Text style = {styles.button}>
            Go to Favouraites
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 40,
  },
  heading: {
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    color: colors.orange,
  },
  text: {
    marginTop: 40,
    height: 60,
    width: "85%",
    height: "12%",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 20,
    borderWidth: 4,
    borderColor: colors.blue,
    backgroundColor: colors.quiteBlack,
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  buttonContainer: {
    width: "65%",
    marginTop: 40,
    alignSelf: "center",
    height: 60,
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "pink",
  },
  button: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: colors.quiteBlack,
  },
  modalStyle: {
    backgroundColor: colors.quiteBlack,
  },
  movie: {
    width: "100%",
    height: 50,
  },
});
export default Search;
