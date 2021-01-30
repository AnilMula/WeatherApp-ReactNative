import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Header } from './Header/Header';
import { Primary } from './Primary/Primary';
import { getWeatherByCityName, forecastFor7days } from '../Services/index';
import { HourlyForecast } from './HourlyForecast/HourlyForecast';
import { DailyForecast } from '../components/DailyForecast/DailyForecast';
import { Secondary } from '../components/Secondary/Secondary';

export const HomeScreen = () => {
  const [city, setCity] = useState('Copenhagen');
  const [weatherData, setWeatherData] = useState(null);
  const [dailyData, setDailyData] = useState(null);

  const refreshForCity = useCallback(async () => {
    try {
      const cityWeather = await getWeatherByCityName(city);
      setWeatherData(cityWeather);

      const forecastData = await forecastFor7days(
        cityWeather?.coord?.lat,
        cityWeather?.coord?.lon
      );
      setDailyData(forecastData);
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  useEffect(() => {
    refreshForCity();
  }, []);
  return (
    <View style={styles.bgColor}>
      <Header />
      <Primary
        temp={weatherData?.main?.temp}
        city={weatherData?.name}
        desc={weatherData?.weather[0]?.description}
        icon={weatherData?.weather[0]?.icon}
      />
      <HourlyForecast hourly={dailyData?.hourly} />
      <DailyForecast weekly={dailyData?.daily} />
      <Secondary current={dailyData?.current} />
    </View>
  );
};
const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: '#A3AdF7',
  },
});
