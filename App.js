import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './constants/colors.js';
import { Navigator } from './Navigation/Navigator.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';






export default function App() {
  return (
      <SafeAreaProvider>
        <Navigator/>
      </SafeAreaProvider>
    
  );
}
 const styles = StyleSheet.create({
  background:{
    backgroundColor:colors.quiteBlack,
    height:"100%"
  },
  heading:{
    color:"white",
    fontSize:50,
    paddingTop:100,
    height:30,

 },
container:{
  flex:1,
  paddingTop:50,
  alignItems:"center",
  backgroundColor:colors.quiteBlack
}})