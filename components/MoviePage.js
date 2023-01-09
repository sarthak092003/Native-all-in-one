import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import colors from "../constants/colors";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MoviePage = ({ movie, moviedes }) => {


  const [like,setLike] = useState(moviedes.like)
  const onLike = async()=>{
    setLike(!like)
    moviedes.like = !like
    try {

      let jsonString =  JSON.stringify(moviedes)
      await AsyncStorage.setItem(movie,jsonString)
      
    } catch (error) {
      console.log(error);
      
    }

    
  }


  return (
    <View style={style.container}>
      <Text style={style.heading}>{moviedes.Title}</Text>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={{
            uri: moviedes.Poster,
          }}
        />
        <Text style={style.descriptionStyle}>
          <Text style={style.plotStyle}>PLot</Text>: {moviedes.Plot}
        </Text>
      </View>
      <View style={{ flex: 4,justifyContent:'center',alignItems:"center",paddingBottom:20 }}>
        <View style = {{justifyContent:"center",alignItems:"center"}}>
          <Text>Add to Favouraites</Text>
          <TouchableOpacity onPress={onLike}>
            <MaterialIcons name="favorite-border" size={24} color={like?colors.red:colors.white} />
          </TouchableOpacity>
        </View>

        <Text style={style.ratingHeading}>Ratings</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`https://www.imdb.com/title/${moviedes.imdbID}`);
          }}
        >
          <Text style={style.ratingStyle}>Imdb: {moviedes.imdbRating}</Text>
        </TouchableOpacity>
        <Text style={style.ratingStyle}>Meta:{moviedes.Metascore}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.quiteBlack,
  },
  heading: {
    flex: 2,
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    paddingBottom: 20,
    color: colors.orange,
  },
  imageContainer: { flex: 4, flexDirection: "row"},
  image: {
    height: "70%",
    flex: 6,
    marginEnd: 2,
    borderRadius: 20,
    adjustsFontSizeToFit: "true",
    flexWrap: "wrap",
    paddingRight: 10,
  },
  descriptionStyle: {
    flex: 4,
    color: colors.white,
    fontSize: 17,
    overflow: "visible",
    lineHeight: 27,
    letterSpacing: 0.3,
  },
  plotStyle: {
    color: colors.orange,
    letterSpacing: 0.3,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  ratingHeading: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
    letterSpacing: 0.4,
  },
  ratingStyle: { color: colors.blue, textAlign: "center", fontSize: 20 },
});
export default MoviePage;
