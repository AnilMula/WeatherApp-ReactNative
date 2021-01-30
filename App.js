import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/components/HomeScreen';
import { WeeklyScreen } from './src/components/WeeklyScreen';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Weather Info',
            tabBarIcon: () => {
              return <Feather size={25} name={'home'} color={'blue'} />;
            },
          }}
        />
        <Tab.Screen
          name="Weekly"
          component={WeeklyScreen}
          options={{
            title: 'Settings',
            tabBarIcon: () => {
              return <Feather size={25} name={'settings'} color={'blue'} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
