import React, {Component} from "react";
import {




    SafeAreaView,
    ScrollView,

    
  } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
import HomePage from '../screens/HomePage';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';


const Navigation = createDrawerNavigator(
    {
        HomePage :{
            screen: HomePage,
            navigationOptions: {
                title: 'Home',
              },
        },
        SecondScreen :{
            screen: SecondScreen,
            navigationOptions: {
                title: 'Currencies',
              },
        },
        ThirdScreen :{
            screen: ThirdScreen,
            navigationOptions: {
                title: 'Settings',
              },
        },
    },
    {
        drawerPosition: 'right',
        initialRouteName: 'HomePage',
    }
)

const CustomDrawerNavigation = props => {
  return (  
    <SafeAreaView>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export const DrawerNavigation = createAppContainer(Navigation);
