import React, { useCallback, useState } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors"
import langList from "../data/langList";

import { Feather } from '@expo/vector-icons';
const DropdownComponent = ({changeLang, sign,label }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: colors.white }]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: colors.blue }]}
        activeColor= {colors.orange}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.list}
        itemTextStyle={styles.text}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={langList}
        search
        maxHeight={300}
        labelField="Name"
        valueField="key"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.key);
          setIsFocus(false);
          sign(item.key);
          changeLang(item.Name);
          
        }}
        renderLeftIcon={() => (
          <Ionicons
            name="language"
            style={styles.icon}
            color={isFocus ? colors.orange : colors.white}
            size={15}
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
    width: "50%",
  },
  list: {
    backgroundColor: colors.quiteBlack,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
  dropdown: {
    height: 50,
    borderColor: colors.white,
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: colors.blue,
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
    color: colors.white,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: colors.white,
    backgroundColor: colors.quiteBlack,
  },
});
