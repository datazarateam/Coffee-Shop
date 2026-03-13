import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './mobile/screens/SplashScreen';
import { HomeScreen } from './mobile/screens/HomeScreen';
import { DetailScreen } from './mobile/screens/DetailScreen';
import { OrderScreen } from './mobile/screens/OrderScreen';
import { TrackingScreen } from './mobile/screens/TrackingScreen';
import { AppProvider } from './mobile/context/AppContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Tracking" component={TrackingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

