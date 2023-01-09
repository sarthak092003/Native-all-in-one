import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import ListItem from "../components/Lists";

const LikedPage = (active) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  

  useEffect(() => {
    console.log("enter");
    const loadStorage = async () => {
      try {
        setIsLoading(true);
        const allKeys = await AsyncStorage.getAllKeys();
        // AsyncStorage.clear()
        for (const i in allKeys) {
          let movieDes = await AsyncStorage.getItem(allKeys[i]);
          let movieJson = await JSON.parse(movieDes);
          let movieobject = { key: allKeys[i], movieDes: movieJson };
          setMovieList((previous) => [...previous, movieobject]);
        }
        console.log(movieList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadStorage();
  }, [active]);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
            <Text style = {styles.heading}>
                Likeeee!
            </Text>
          <FlatList
            data={movieList}
            keyExtractor={(item) => item.key}
            renderItem={ListItem}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:40,
    backgroundColor:colors.quiteBlack,
    justifyContent:"space-evenly",
    alignContent:'space-between'
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    letterSpacing:0.4,
    color:colors.orange,
    padding:10,
    fontStyle:"italic"

  }
});

export default LikedPage;
