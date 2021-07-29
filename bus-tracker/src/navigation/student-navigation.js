import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../screens/about';
import BusList from '../screens/bus-list';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

function HomeStackNavigation() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="BusList" component={BusList} options={{
                headerTitle: 'Buses'
                }}/>
        </HomeStack.Navigator>
    );
}

function AboutStackNavigation() {
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen name="About" component={AboutScreen} options={{ headerTitle: 'About App'}}/>
        </AboutStack.Navigator>
    );
}

export default function StudentNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'md-home-outline';
                    }  if (route.name === 'About') {
                        iconName = 'md-information-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#095188',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={HomeStackNavigation}/>
            <Tab.Screen name="About" component={AboutStackNavigation} />
        </Tab.Navigator>
    );
}