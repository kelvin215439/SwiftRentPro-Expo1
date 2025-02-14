import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>🏠 SwiftRentPro - Expo</Text>
            <Button title="Propiedades" onPress={() => navigation.navigate('Propiedades')} />
        </View>
    );
};

const PropertiesScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
            <Text style={{ fontSize: 20, color: '#333' }}>📋 Lista de Propiedades</Text>
        </View>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Inicio" component={HomeScreen} />
                <Tab.Screen name="Propiedades" component={PropertiesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}