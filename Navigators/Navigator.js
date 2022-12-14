import React from "react";
import {createStackNavigator} from '@react-navigation/stack'

import Login from '..Screens/Login'
import MainS from '..Screens/MainS'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='login'
            component={Login}
            />
            <Stack.Screen
            name='mainS'
            component={MainS}
            />
        </Stack.Navigator>
    )
}