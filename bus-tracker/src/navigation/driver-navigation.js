import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/about';
import {createStackNavigator} from "@react-navigation/stack";
import RouteBusStops from "../screens/route-bus-stops";
import Login from "../screens/login";
import AuthLoader from "../screens/auth-loader";
import EmergencyStop from "../screens/emergency-stop";
import Ionicons from 'react-native-vector-icons/Ionicons';

const DriverTabs = createBottomTabNavigator();
const AuthLoaderStack = createStackNavigator();
const LoginStack = createStackNavigator();
const BusesStackNavigation = createStackNavigator();
const EmergencyStack = createStackNavigator();
const DriverStackNavigation = createStackNavigator();

function AuthLoaderNavigation() {
    return (
        <AuthLoaderStack.Navigator headerMode='none'>
            <AuthLoaderStack.Screen name="AuthLoader" component={AuthLoader} />
        </AuthLoaderStack.Navigator>
    );
}

function LoginStackNavigation() {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="Login" component={Login} options={{ headerTitle: 'Sign In'}}/>
        </LoginStack.Navigator>
    );
}

function HomeStackNavigation() {
    return (
        <BusesStackNavigation.Navigator>
            <BusesStackNavigation.Screen name="RouteBusStops" component={RouteBusStops} options={{headerTitle: 'My Route Bus Stops'}}/>
        </BusesStackNavigation.Navigator>
    );
}

function EmergencyStackNavigation() {
    return (
        <EmergencyStack.Navigator>
            <EmergencyStack.Screen name="EmergencyScreen" component={EmergencyStop} options={{headerTitle: 'Emergency Stop'}}/>
        </EmergencyStack.Navigator>
    );
}

function DriverMainNavigation() {
    return (
        <DriverTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'md-home-outline';
                    } else if (route.name === 'Emergency') {
                        iconName = 'md-alert-outline';
                    } else if (route.name === 'About') {
                        iconName = 'md-information-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#095188',
                inactiveTintColor: 'gray',
            }}>
            <DriverTabs.Screen name="Home" component={HomeStackNavigation} />
            <DriverTabs.Screen name="Emergency" component={EmergencyStackNavigation} />
            <DriverTabs.Screen name="About" component={AboutScreen} />
        </DriverTabs.Navigator>
    );
}

export default () => (
    <DriverStackNavigation.Navigator headerMode='none'>
        {/*<DriverStackNavigation.Screen name="AuthLoader" component={AuthLoaderNavigation} />*/}
        <DriverStackNavigation.Screen name="Login" component={LoginStackNavigation} />
        <DriverStackNavigation.Screen name="MainNavigation" component={DriverMainNavigation} />
    </DriverStackNavigation.Navigator>
)