import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const ListItem = ({ name, head, value, color }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.columnWrapper}>
        <Feather size={15} name={name} color={color} />

        <Text style={styles.text}>{head}</Text>
      </View>
      <View style={{ alignContent: 'flex-end' }}>
        {!isNaN(value) ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text style={styles.text}>{value}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    color: 'red',
  },
  columnWrapper: {
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  text: { color: 'white', fontSize: 18 },
});
