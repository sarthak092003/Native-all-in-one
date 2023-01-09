import Search from "../pages/Movie"
import Translate from "../pages/Translate"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import colors from "../constants/colors";
import LikedPage from "../pages/likedMoives";

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()

const MovieNavigator =()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      tabBarShowLabel:true,
      headerShown:false
   }}
    >
      <Stack.Screen component={Search} name = "Movie"/>
      <Stack.Screen component={LikedPage} name = "Like"/>
    </Stack.Navigator>
  )
}

export const Navigator = ()=>{
    return(
        <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: colors.quiteBlack,
        inactiveBackgroundColor: 'grey',
            style: {
                  backgroundColor: '#CE4418',
                  paddingBottom: 3
            }
     }}
     screenOptions={{
        tabBarShowLabel:true,
        headerShown:false
     }}
      >
        <Tab.Screen name = "movie" component={MovieNavigator}
        options={{
            tabBarIcon: ({color,size})=>(
                <Feather name="video" size={size} color={color} />
              )
        }}
        
        />
        <Tab.Screen name = "translate" component={Translate}
        options={{
            tabBarIcon: ({color,size})=>(
                <FontAwesome name="language" size={size} color={color} />
              )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )
}