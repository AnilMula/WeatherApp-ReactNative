import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from '../List/List';
import { hour, percent, pressure, uvi, speed } from '../../Services/Metrics';
import { Temperature } from '../Temperature/Temperature';

export const Secondary = ({ current, timeZone }) => {
  return (
    <View style={styles.wrapper}>
      <List
        name={'sunrise'}
        color={'red'}
        head={'Sun Rise'}
        value={hour(current?.sunrise + timeZone)}
      />
      <List
        name={'sunset'}
        color={'purple'}
        head={'Sun Set'}
        value={hour(current?.sunset + timeZone)}
      />
      <List
        name={'thermometer'}
        color={'blue'}
        head={'Feels Like'}
        value={<Temperature temp={current?.feels_like} />}
      />
      <List
        name={'underline'}
        color={'blue'}
        head={'Pressure'}
        value={pressure(current?.pressure)}
      />
      <List
        name={'droplet'}
        color={'blue'}
        head={'Humidity'}
        value={percent(current?.humidity)}
      />
      <List
        name={'umbrella'}
        color={'blue'}
        head={'UVI'}
        value={uvi(current?.uvi)}
      />
      <List
        name={'wind'}
        color={'blue'}
        head={'Wind Speed'}
        value={speed(current?.wind_speed)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-between',
    borderColor: '#93a0fa',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#93a0fa',
    padding: 10,
    margin: 10,
  },
});
