import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import TabNavigator from './Components/MainScreen'
import {Icon} from 'native-base';
import {Ionicons,SimpleLineIcons} from "@expo/vector-icons";


class App extends React.Component {
  render() {
    return (
  <AppContainer></AppContainer>  
  );
  }
}
const AppNavigator = createStackNavigator(
  {
    Mainscreen: TabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: 
          <Icon
            style={{ paddingLeft: 20 }}
            // onPress={() => navigation.openDrawer()}
            name='ios-camera'
            size={30}
          />
        ,
        headerRight: 
          <Icon
            style={{ paddingRight: 20 }}
            // onPress={() => navigation.openDrawer()}
            name='ios-send'
            size={30}
          />
        ,
        title : "Instagram"


      };
    }
  }
);
export default App;
const AppContainer = createAppContainer(AppNavigator);

// NavigationOptions : {
  //   headerLeft : <Icon name='ios-camera' style={{paddingLeft: 20 }}/>,
  //   title: "Instagram",
  //   headerRight: <Icon name='ios-send' style={{paddingRight: 20}}/>
  // }


