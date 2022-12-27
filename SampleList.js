import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const List = 
[ { key: 'af', Name: 'Afrikaans' },
  { key: 'am', Name: 'Amharic' },
  { key: 'ar', Name: 'Arabic' },
  { key: 'as', Name: 'Assamese' },
  { key: 'az', Name: 'Azerbaijani' },
  { key: 'ba', Name: 'Bashkir' },
  { key: 'bg', Name: 'Bulgarian' },
  { key: 'bn', Name: 'Bangla' },
  { key: 'bo', Name: 'Tibetan' },
  { key: 'bs', Name: 'Bosnian' },
  { key: 'ca', Name: 'Catalan' },
  { key: 'cs', Name: 'Czech' },
  { key: 'cy', Name: 'Welsh' },
  { key: 'da', Name: 'Danish' },
  { key: 'de', Name: 'German' },
  { key: 'dv', Name: 'Divehi' },
  { key: 'el', Name: 'Greek' },
  { key: 'en', Name: 'English' },
  { key: 'es', Name: 'Spanish' },
  { key: 'et', Name: 'Estonian' },
  { key: 'eu', Name: 'Basque' },
  { key: 'fa', Name: 'Persian' },
  { key: 'fi', Name: 'Finnish' },
  { key: 'fil', Name: 'Filipino' },
  { key: 'fj', Name: 'Fijian' },
  { key: 'fo', Name: 'Faroese' },
  { key: 'fr', Name: 'French' },
  { key: 'fr-CA', Name: 'French (Canada)' },
  { key: 'ga', Name: 'Irish' },
  { key: 'gl', Name: 'Galician' },
  { key: 'gu', Name: 'Gujarati' },
  { key: 'he', Name: 'Hebrew' },
  { key: 'hi', Name: 'Hindi' },
  { key: 'hr', Name: 'Croatian' },
  { key: 'hsb', Name: 'Upper Sorbian' },
  { key: 'ht', Name: 'Haitian Creole' },
  { key: 'hu', Name: 'Hungarian' },
  { key: 'hy', Name: 'Armenian' },
  { key: 'id', Name: 'Indonesian' },
  { key: 'ikt', Name: 'Inuinnaqtun' },
  { key: 'is', Name: 'Icelandic' },
  { key: 'it', Name: 'Italian' },
  { key: 'iu', Name: 'Inuktitut' },
  { key: 'iu-Latn', Name: 'Inuktitut (Latin)' },
  { key: 'ja', Name: 'Japanese' },
  { key: 'ka', Name: 'Georgian' },
  { key: 'kk', Name: 'Kazakh' },
  { key: 'km', Name: 'Khmer' },
  { key: 'kmr', Name: 'Kurdish (Northern)' },
  { key: 'kn', Name: 'Kannada' },
  { key: 'ko', Name: 'Korean' },
  { key: 'ku', Name: 'Kurdish (Central)' },
  { key: 'ky', Name: 'Kyrgyz' },
  { key: 'lo', Name: 'Lao' },
  { key: 'sl', Name: 'Slovenian' },
  { key: 'sm', Name: 'Samoan' },
  { key: 'so', Name: 'Somali' },
  { key: 'sq', Name: 'Albanian' },
  { key: 'sr-Cyrl', Name: 'Serbian (Cyrillic)' },
  { key: 'sr-Latn', Name: 'Serbian (Latin)' },
  { key: 'sv', Name: 'Swedish' },
  { key: 'sw', Name: 'Swahili' },
  { key: 'ta', Name: 'Tamil' },
  { key: 'te', Name: 'Telugu' },
  { key: 'th', Name: 'Thai' },
  { key: 'ti', Name: 'Tigrinya' } ]



const DropdownComponent = ({visible,changeLang,sign}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'white' }]}>
        Language
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle = {styles.list}
        itemTextStyle	= {styles.text}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={List}
        search
        maxHeight={300}
        labelField="Name"
        valueField="key"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
            sign(item.key)
            changeLang(item.Name)
            console.log(item)
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'white'}
            name="Safety"
            size={10}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 16,
    width:"50%"

  },
  list:{
    backgroundColor:"black",
  },
  text:{
    color:"white",
    textAlign:"center"
  },
  dropdown: {
    height: 50,
    borderColor: 'white',
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color:"white"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:"white",
    backgroundColor:"black"
  },
});