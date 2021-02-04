import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const List = ({ name, head, value, color }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between',
        color: 'red',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-start',
        }}
      >
        <Feather size={15} name={name} color={color} />

        <Text style={{ color: 'white', fontSize: 18 }}>{head}</Text>
      </View>
      <View style={{ alignContent: 'flex-end' }}>
        {!isNaN(value) ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={{ color: 'white', fontSize: 18 }}>{value}</Text>
        )}
      </View>
    </View>
  );
};
