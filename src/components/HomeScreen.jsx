import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Header } from './Header/Header';
import { Primary } from './Primary/Primary';
import { getWeatherByCityName, forecastFor7days } from '../Services/index';
import { HourlyForecast } from './HourlyForecast/HourlyForecast';
import { DailyForecast } from '../components/DailyForecast/DailyForecast';
import { Secondary } from '../components/Secondary/Secondary';

export const HomeScreen = () => {
  const [city, setCity] = useState('delhi');
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
    <ScrollView style={styles.bgColor}>
      <Header />
      <Primary
        temp={weatherData?.main?.temp}
        city={weatherData?.name}
        desc={weatherData?.weather[0]?.description}
        icon={weatherData?.weather[0]?.icon}
        timeStamp={dailyData?.current?.dt}
        timeZone={dailyData?.timezone_offset}
      />
      <HourlyForecast
        hourly={dailyData?.hourly}
        timeZone={dailyData?.timezone_offset}
      />
      <DailyForecast
        weekly={dailyData?.daily}
        timeZone={dailyData?.timezone_offset}
      />
      <Secondary
        current={dailyData?.current}
        timeZone={dailyData?.timezone_offset}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: '#A3AdF7',
  },
});
