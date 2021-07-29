import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RoleSelect from "../screens/role-select";
import DriverNavigation from "./driver-navigation";
import StudentNavigation from "./student-navigation";

const AppStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <AppStack.Navigator headerMode='none'>
            <AppStack.Screen name="RoleSelect" component={RoleSelect} />
            <AppStack.Screen name="DriverNavigation" component={DriverNavigation} />
            <AppStack.Screen name="StudentNavigation" component={StudentNavigation} />
        </AppStack.Navigator>
    </NavigationContainer>
)