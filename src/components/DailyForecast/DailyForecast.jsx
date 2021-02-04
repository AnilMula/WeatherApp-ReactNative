import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { day } from '../../Services/Metrics';
import { Temperature } from '../Temperature/Temperature';

export const DailyForecast = ({ weekly, timeZone }) => {
  return (
    <View style={styles.wrapper}>
      {weekly?.slice(1).map((data) => (
        <View key={data.dt}>
          <Text>
            {day(data.dt + timeZone)}
            {'     '}
          </Text>

          <View>
            <Image
              style={styles.img}
              source={{
                uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
              }}
            />
          </View>
          <Text>
            <Temperature temp={data.temp.min} a={10} b={3} c={5} />
          </Text>
          <Text>
            <Temperature temp={data.temp.max} a={10} b={3} c={5} />
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
    borderColor: '#93a0fa',

    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#93a0fa',
    padding: 10,
    margin: 10,
  },
  img: { height: 20, width: 10 },
});
