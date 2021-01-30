import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { date, time } from '../../Services/Metrics';
import { Temperature } from '../Temperature/Temperature';

export const Primary = ({ temp, city, desc, icon }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <Text style={styles.textCity}>{city}</Text>
      </View>
      <View>
        <Text style={styles.dateTime}>
          {date()} {time()}
        </Text>
      </View>
      <View style={styles.text}>
        <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      </View>
      <View>
        <Text style={styles.text}>{desc}</Text>
      </View>
      <View>
        {isNaN(temp) ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Temperature temp={temp} size={'large'} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  dateTime: {
    color: 'white',
    fontSize: 14,
  },
  textCity: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 80,
    height: 40,
  },
});
