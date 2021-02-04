import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const Temperature = ({ temp, a, b, c }) => {
  // temperature from present url is in units 'Kelvin'
  // convert it to degree centigrade and round off
  const degCentigrade = Math.round(temp - 273.15);

  const styles = StyleSheet.create({
    x: { fontSize: a, color: 'white' },
    y: { fontSize: b, color: 'white' },
    z: { fontSize: c, color: 'white' },
    wrapper: { flexDirection: 'row', justifyContent: 'center' },
    temp: { alignItems: 'flex-end' },
    superScript: { alignItems: 'flex-start' },
    symbolC: { alignItems: 'flex-start' },
  });

  const FormatTemperature = () => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.temp}>
          <Text style={styles.x}>{degCentigrade}</Text>
        </View>
        <View style={styles.superScript}>
          <Text style={styles.y}>{'o'}</Text>
        </View>

        <View style={styles.symbolC}>
          <Text style={styles.z}>{'C'}</Text>
        </View>
      </View>
    );
  };
  return <FormatTemperature />;
};
