import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TAB1 from './Tab1';
import TAB2 from './Tab2';

// esto va en el Tab.Screen  despues de component initialParams={{nombre:this.props.route.params.nombre}}
// Borrar NavigationContainer

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Inicio"
            component={TAB1}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={"red"} size={35} />
              ),
            }}
          />
          <Tab.Screen name="Tab2" component={TAB2}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={"red"} size={35} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
