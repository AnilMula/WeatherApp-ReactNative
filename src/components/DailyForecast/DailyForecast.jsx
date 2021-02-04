import React from 'react';
import { View, Text, Image } from 'react-native';
import { day } from '../../Services/Metrics';
import { Temperature } from '../Temperature/Temperature';

export const DailyForecast = ({ weekly, timeZone }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#93a0fa',

        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#93a0fa',
        padding: 10,
        margin: 10,
      }}
    >
      {weekly?.slice(1).map((data) => (
        <View key={data.dt}>
          <Text>
            {day(data.dt + timeZone)}
            {'     '}
          </Text>

          <View>
            <Image
              style={{ height: 20, width: 10 }}
              source={{
                uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
              }}
            />
          </View>
          <Text>
            <Temperature temp={data.temp.min} size={'small'} />
          </Text>
          <Text>
            <Temperature temp={data.temp.max} size={'small'} />
          </Text>
        </View>
      ))}
    </View>
  );
};
