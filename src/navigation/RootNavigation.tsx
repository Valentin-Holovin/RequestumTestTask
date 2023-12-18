import React, { useEffect } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { navigate, navigationRef } from './NavigationService';
import { Routes } from './Routes';
import { LoginScreen, HomePage, SignUpScreen, SplashScreen } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createNativeStackNavigator();

export const RootNavigation = () => {

    useEffect(() => {
        const checkUserAndNavigate = async () => {
            const userDataString = await AsyncStorage.getItem('userData');
            const userData = userDataString ? JSON.parse(userDataString) : null;

            const userEmailString = await AsyncStorage.getItem('email');
            const userEmail = userEmailString ? JSON.parse(userEmailString): null

            if (userData || userEmail) {
                navigate(Routes.HOME);
            }
        };

        checkUserAndNavigate();
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <AppStack.Screen name={Routes.SPLASH} component={SplashScreen} />
                <AppStack.Screen name={Routes.LOGIN} component={LoginScreen} />
                <AppStack.Screen name={Routes.SIGN_UP} component={SignUpScreen} />
                <AppStack.Screen name={Routes.HOME} component={HomePage} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}