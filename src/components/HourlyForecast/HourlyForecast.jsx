import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { hour, time } from '../../Services/Metrics';
import { Temperature } from '../Temperature/Temperature';

export const HourlyForecast = ({ hourly, timeZone }) => {
  return (
    <View style={styles.wrapper}>
      {hourly?.slice(1, 8).map((data) => (
        <View key={data.dt}>
          <Text>{hour(data.dt + timeZone - 3600)}</Text>
          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={{
                uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
              }}
            />
          </View>
          <Text>
            <Temperature temp={data.temp} a={10} b={3} c={5} />
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    borderColor: '#93a0fa',

    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#93a0fa',
    padding: 10,
    margin: 10,
  },
  imgWrapper: { justifyContent: 'center' },
  img: { height: 20, width: 10 },
});
