import React from 'react';
import { View, Text } from 'react-native';
export const Temperature = ({ temp, size }) => {
  // temperature from present url is in units 'Kelvin'
  // convert it to degree centigrade and round off
  const degCentigrade = Math.round(temp - 273.15);

  if (size === 'large')
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 40, color: 'white' }}>{degCentigrade}</Text>
        </View>
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 10, color: 'white' }}>{'o'}</Text>
        </View>

        <View style={{ alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>{'C'}</Text>
        </View>
      </View>
    );
  if (size === 'small')
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 10, color: 'white' }}>{degCentigrade}</Text>
        </View>
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 3, color: 'white' }}>{'o'}</Text>
        </View>

        <View style={{ alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 5, color: 'white' }}>{'C'}</Text>
        </View>
      </View>
    );
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 20, color: 'white' }}>{degCentigrade}</Text>
      </View>
      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 5, color: 'white' }}>{'o'}</Text>
      </View>

      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 10, color: 'white' }}>{'C'}</Text>
      </View>
    </View>
  );
};
