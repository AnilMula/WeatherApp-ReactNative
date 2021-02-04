import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from '../ListItem/ListItem';
import { hour, percent, pressure, uvi, speed } from '../../Services/Metrics';
import { Temperature } from '../Temperature/Temperature';

export const Secondary = ({ current, timeZone }) => {
  return (
    <View style={styles.wrapper}>
      <ListItem
        name={'sunrise'}
        color={'red'}
        head={'Sun Rise'}
        value={hour(current?.sunrise + timeZone)}
      />
      <ListItem
        name={'sunset'}
        color={'purple'}
        head={'Sun Set'}
        value={hour(current?.sunset + timeZone)}
      />
      <ListItem
        name={'thermometer'}
        color={'blue'}
        head={'Feels Like'}
        value={<Temperature temp={current?.feels_like} a={20} b={5} c={10} />}
      />
      <ListItem
        name={'underline'}
        color={'blue'}
        head={'Pressure'}
        value={pressure(current?.pressure)}
      />
      <ListItem
        name={'droplet'}
        color={'blue'}
        head={'Humidity'}
        value={percent(current?.humidity)}
      />
      <ListItem
        name={'umbrella'}
        color={'blue'}
        head={'UVI'}
        value={uvi(current?.uvi)}
      />
      <ListItem
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
