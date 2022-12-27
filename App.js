import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './pages/Movie.js';
import Translate from './pages/Translate.js'
import DropdownList from './SampleList.js';


export default function App() {
  return (
    <View style= {styles.background}>
        <Text style = {styles.heading}>
          Translate
        </Text>
      <Translate/>

    </View>
    
  );
}
 const styles = StyleSheet.create({
  background:{
    backgroundColor:"black",
    height:"100%"
  },
  heading:{
    color:"white",
    fontSize:50,
    paddingTop:100,
    height:30,

 }})