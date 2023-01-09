import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      {console.log(item)}
      <Image
        style={styles.image}
        source={{
          uri: item.movieDes.Poster,
        }}
      />
      <Text style={styles.text}>{item.key}</Text>
      <TouchableOpacity style={{ marginLeft: 20 }}>
        <MaterialIcons name="favorite-border" size={20} color={colors.red} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 400,
    backgroundColor: colors.blue,
    paddingLeft: 10,
    padding: 20,
    margin: 20,
    borderRadius: 60,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: 150,
    height: 150,
    marginEnd: 2,
    borderRadius: 20,
    adjustsFontSizeToFit: "true",
    flexWrap: "wrap",
    paddingRight: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.4,
    paddingLeft: 10,
  },
});

export default ListItem;
