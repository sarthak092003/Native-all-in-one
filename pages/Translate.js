import { Header } from "react-native/Libraries/NewAppScreen";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
import LanguageList from "../components/langugeList";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponent from "../SampleList";

const Translate = () => {
  const [primaryText, changePrimary] = useState("");
  const [secondaryText, changeSecondary] = useState("");
  const [primaryLang, changePrimaryLang] = useState("English");
  const [secondaryLang, changeSecondaryLang] = useState("English");
  const [primarySign, changePrimarySign] = useState("en");
  const [secondarySign, changeSecondarySign] = useState("en");
  const [listStatus, listChange] = useState(false);
  const [listStatusTo, listChangeTo] = useState(false);
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
      "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=de&api-version=3.0&from=en&profanityAction=NoAction&textType=plain",
      options
    );
    json = await res.json();
    await changeSecondary(json[0].translations[0].text);
    await console.log(json[0].translations[0].text);
  }

  return (
    <View>
      <Text>Translation</Text>
      <TextInput placeholder="translate" onChangeText={changePrimary} />
      <Text>{primaryText}</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            api();
          }}
        >
          <Text>Translate</Text>
        </TouchableOpacity>
        <Text>{secondaryText}</Text>
        <TouchableOpacity onPress={() => listChange(true)}></TouchableOpacity>
        <View style={styles.box}>
          <DropdownComponent
            style={styles.size}
            changeLang={changePrimaryLang}
            sign={changePrimarySign}
          />

          <DropdownComponent
            style={styles.size}
            changeLang={changeSecondaryLang}
            sign={changeSecondarySign}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    padding: 0,
    margin: 0,
  },
  size: {},
});
export default Translate;
