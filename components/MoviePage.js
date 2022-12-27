import { Text, StyleSheet, Button, View, Image } from "react-native";

const MoviePage = ({ movie, moviedes }) => {
  return (
    <View style={style.container}>
      <Text style = {style.heading}>{moviedes.Title}</Text>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={{
            uri: moviedes.Poster,
          }}
        />
        <Text style={style.descriptionStyle}><Text style = {style.plotStyle}>PLot</Text>: {moviedes.Plot}</Text>
      </View>
      <View style ={{flex:2}}>
        <Text style = {style.ratingStyle}>
            Ratingscomponents/MoviePage.js
        </Text>
        <Text>
            Imdb: {moviedes.imdbRating}
        </Text>
        <Text>
            Meta:{moviedes.Metascore}
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
    container:{ width: "100%", height: "100%",},
    heading:{flex:2,fontStyle:"italic",textAlign:"center",fontSize:60,fontWeight:"bold",paddingBottom:20},
    imageContainer:{ flex: 6, flexDirection: "row" },
    image:{ height: "50%", flex: 6,marginEnd:2,borderRadius:20,adjustsFontSizeToFit:"true" ,flexWrap:"wrap"},
    descriptionStyle:{ flex: 4,color:"black",fontSize:17,overflow:"visible"},
    plotStyle:{color:"black",fontSize:20,fontWeight:"bold",fontStyle:"italic"},
    ratingStyle:{fontSize:40,textAlign:"center",fontWeight:"bold"},


})
export default MoviePage;
