import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { HomeScreen } from '../HomeScreen';

export const LeftDrawer = () => {
  const Drawer = createDrawerNavigator();

  const [city, setCity] = useState(null);
  const cities = [
    'delhi',
    'sydney',
    'new york',
    'cape town',
    'dubai',
    'london',
    'lisbon',
  ];
  /* const DrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label={enterCity} />
      </DrawerContentScrollView>
    );
  };

  const enterCity = () => {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
          onChangeText={(text) => {
            setCity(text);
          }}
        />
        <TouchableOpacity onPress={addCity}>
          <Text>Add city</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const addCity = () => {
    cities.push(city);
  };
  console.log(cities);
 */
  return (
    <Drawer.Navigator drawerStyle={styles.draw}>
      <Drawer.Screen name="My Location">
        {(props) => <HomeScreen {...props} city={'Copenhagen'} />}
      </Drawer.Screen>
      {cities.map((city) => (
        <Drawer.Screen key={city} name={city}>
          {(props) => <HomeScreen {...props} city={city} />}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  draw: {
    backgroundColor: '#c6cbef',
    width: 200,
  },
});
