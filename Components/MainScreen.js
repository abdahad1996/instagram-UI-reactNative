import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import HomeTab from "./Tabs/HomeTab";
import SearchTab from "./Tabs/SearchTab";
import LikesTab from "./Tabs/LikesTab";
import ProfileTab from "./Tabs/ProfileTab";
import AddMediaTab from "./Tabs/ProfileTab";
import {Ionicons,SimpleLineIcons} from "@expo/vector-icons";
import {icons} from "native-base";


class MainScreen extends Component {


    render() {
        return (
<Apptabnavigator></Apptabnavigator>
            
            );
    }
}



const Apptabnavigator = createBottomTabNavigator(
    {
    Home : {
        screen : HomeTab,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="ios-home" size={32}
                //  color="gray"
                  />;
              },
		}) 
    },
    Search : {
        screen : SearchTab,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="ios-search" size={32} 
                // tintColor="gray"
                 />;
              },
            })    
    },
    AddMedia : {
        screen : AddMediaTab,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="ios-add-circle-outline" size={32} 
                // color="gray" 

                />;
              },
            })   
    },
    Likes : {
        screen : LikesTab,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="ios-heart" size={32}
                //  color="gray" 

                 />;
              },
            })   
    },
    Profile :{
        screen: ProfileTab,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="ios-person" size={32} 
                // color="gray" 

                />;
              },
            })   
        },
    },

     
    // IMPORTANT CODE TO SHOW WHEN WE NAVIGATE 
    {
        // defaultNavigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //     const { routeName } = navigation.state;
        //     let iconName;
        //     if (routeName === 'HomeTab') {
        //         iconName = `ios-home${focused ? '' : '-outline'}`;
        //         // Sometimes we want to add badges to some icons. 
        //         // You can check the implementation below.
                
        //     } else if (routeName === 'SearchTab') {
        //         iconName = `ios-search${focused ? '' : '-outline'}`;
        //     }
    
        //     // You can return any component that you like here!
        //     return <Ionicons
        //     name={iconName} 
        //     size={25} 
        //     color={tintColor} />;
        //     },
        // }),
        
        
    
    
        
        initialRouteName:"Home",
        animationEnabled:"true",
        swipeEnabled:"true",
        tabBarPosition:"bottom",
        tabBarOptions : {
            activeTintColor: 'black',
            inactiveTintColor: 'lightgray',
            // activeTintColor: '#000000',
            // activeBackgroundColor: "gray",
            // inactiveTintColor: 'gray',
            showLabel : true,
            showIcon : true,
           
          },
    
        }
    );


export default createAppContainer(Apptabnavigator);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});
