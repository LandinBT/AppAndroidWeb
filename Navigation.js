import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HOME from './Home';
import REGISTER from './Register';
import MENU from './Menu';
import DETAILSLIST from './DetailsList';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const Stack = createNativeStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HOME} options={{headerShown: false}} />
                    <Stack.Screen name="Register" component={REGISTER} />
                    <Stack.Screen name="Menu" component={MENU} options={{headerShown:false }}/>
                    <Stack.Screen name="DetailsList" component={DETAILSLIST} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
