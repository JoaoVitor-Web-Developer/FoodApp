import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../Screens/Home';
import Searches from './Searches';
import Cart from './Cart';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        focused ? (
                            <View style={styles.iconBg}>
                                <Ionicons name='home' color='white' size={25} />
                            </View>
                        ) : (
                            <Ionicons name='home' color={color} size={25} />
                        )
                    ),
                }}
                name='Home'
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Pesquisar',
                    tabBarIcon: ({ color, focused }) => (
                        focused ? (
                            <View style={styles.iconBg}>
                                <Ionicons name='search' color='white' size={25} />
                            </View>
                        ) : (
                            <Ionicons name='search' color={color} size={25} />
                        )
                    ),
                }}
                name='Pesquisas'
                component={Searches}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color, focused }) => (
                        focused ? (
                            <View style={styles.iconBg}>
                                <Ionicons name='cart' color='white' size={25} />
                            </View>
                        ) : (
                            <Ionicons name='cart' color={color} size={25} />
                        )
                    ),
                }}
                name='Carrinho'
                component={Cart}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        focused ? (
                            <View style={styles.iconBg}>
                                <AntDesign name="user" color='white' size={25} />
                            </View>
                        ) : (
                            < AntDesign name="user" color={color} size={25} />
                        )
                    ),
                }}
                name='Perfil'
                component={Profile}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconBg: {
        backgroundColor: '#033f63',
        width: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Tabs;
