import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

//import screens
import HomeScreen from '../screens/HomeScreen';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';
import CreateAccount from '../screens/CreateAccount';
// import ShowDetailsScreen from './src/screens/ShowDetailsScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();



const HomeStackScreen = ({navigation}) =>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen 
            name="TV-SHOWS"
             component={HomeScreen}
             options={{
                headerStyle: {
                    backgroundColor:'tomato',
                    
                  },
                headerTitleAlign:'center',
                headerLeft: ()=>(
                <Ionicons 
                style={{paddingLeft:7,alignSelf:'center'}}
                name="ios-menu"
                 size={38}
                 color="white"
                  onPress={()=>{navigation.openDrawer()}}
                   />
                
                )
             }}
              />
        </HomeStack.Navigator>
    )
}
const ProfileStackScreen = () =>{
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
            name="Profile"
             component={Profile}
             options={{
                headerStyle: {
                    backgroundColor:'tomato',
                    
                  },
                headerTitleAlign:'center',
             }}
              />
        </ProfileStack.Navigator>
    )
}

const TabsScreen = () =>{
    return(
        <Tabs.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            shifting={true}
            >
            <Tabs.Screen 
                name="Home" 
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor:'tomato',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                  }}
            />
            <Tabs.Screen 
                name="Profile" 
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor:'tomato',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user-circle-o" size={24} color={color} />
                    ),
                  }}
            />
        </Tabs.Navigator>
    )
}

const AppNavigation = () =>{

    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabsScreen} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;