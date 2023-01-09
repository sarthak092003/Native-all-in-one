import {
  Text,
  StyleSheet,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { cloneElement, useCallback, useState } from "react";
import DropdownComponent from "../components/DropdownComponent";
import { Button } from "../components/Button";

import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";
import { Input } from "../components/Input";
const Translate = () => {


  const [primaryText, changePrimary] = useState("");
  const [secondaryText, changeSecondary] = useState("");
  const [primaryLang, changePrimaryLang] = useState("English");
  const [secondaryLang, changeSecondaryLang] = useState("English");
  const [primarySign, changePrimarySign] = useState("en");
  const [secondarySign, changeSecondarySign] = useState("en");
  const encodedParams = new URLSearchParams();
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "5398f35636msh94188cd1de89b7fp1fa201jsnbf1aaff31789",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    body: `[{"Text":"${primaryText}"}]`,
  };

  async function api() {
    res = await fetch(
      `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${secondarySign}&api-version=3.0&from=${
        primarySign ? primarySign : "en"
      }&profanityAction=NoAction&textType=plain`,
      options
    );
    json = await res.json();
    changeSecondary(json[0].translations[0].text);
  }

  return (
    <View style = {styles.container}>
      <Text style={styles.heading}>Mutli Language!!</Text>
      <Input placeholder="Translate" style = {styles.input} onChangeText={changePrimary} label="" />
      <View>
        <Button text="Translate" onPress={api} style = {styles.button}/>
        <View style={styles.listContianer}>
          <DropdownComponent
            style={styles.size}
            changeLang={changePrimaryLang}
            sign={changePrimarySign}
            label="From"
          />

          <FontAwesome name="exchange" size={15} color="white" />

          <DropdownComponent
            style={styles.size}
            changeLang={changeSecondaryLang}
            sign={changeSecondarySign}
            label="To"
          />
        </View>
      </View>
      {secondaryText ? (
        <View style={styles.resultContainer}>

          <Text style={styles.result}>
            {secondaryText}
          </Text>
        </View>
      ) :null}
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1,
    paddingTop:50,
  },
  heading: {
    alignSelf: "center",
    fontSize: 40,
    letterSpacing: 0.4,
    fontWeight: "bold",
    color: colors.orange,
    marginBottom:20,
    fontStyle:"italic"
  },
  input:{
    marginVertical:30,
  },
  button:{
    marginVertical:20
  },
  listContianer: {
    flexDirection: "row",
    padding: 0,
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    backgroundColor: colors.quiteBlack,
    borderWidth: 3,
    borderColor: colors.blue,
    flex:1,
    borderRadius:20,
    justifyContent:"center",
    alignItems:'center'
  },
  result:{
    fontSize:30,
    fontWeight:"bold",
    color:colors.white,
    letterSpacing:0.3
  },
  size: {},
});
export default Translate;
