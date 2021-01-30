import React from 'react';
import { View, Text, Image } from 'react-native';
import { hour } from '../../Services/Metrics';
import { Temperature } from '../Temperature/Temperature';

export const HourlyForecast = ({ hourly }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between',
        borderColor: '#93a0fa',

        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#93a0fa',
        padding: 10,
        margin: 10,
      }}
    >
      {hourly?.slice(1, 8).map((data) => (
        <View key={data.dt}>
          <Text>{hour(data.dt)}</Text>

          <View style={{ justifyContent: 'center' }}>
            <Image
              style={{ height: 20, width: 10 }}
              source={{
                uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
              }}
            />
          </View>
          <Text>
            <Temperature temp={data.temp} size={'small'} />
          </Text>
        </View>
      ))}
    </View>
  );
};
