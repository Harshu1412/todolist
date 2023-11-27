import React from 'react'
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import Registration from '../Screens/Registration/Registration';
import MainScreen from '../Screens/MainScreen/MainScreen';
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default StackNavigation 
