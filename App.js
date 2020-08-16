import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { OPEN_WEATHER_API_KEY } from 'react-native-dotenv';

import { WeatherInfo } from './components/WeatherInfo';
import { UnitsPicker } from './components/UnitsPicker';
import { Reload } from './components/Reload';
import { WeatherDetails } from './components/WeatherDetails';

import { colors } from './utils';

export default function App() {
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(null);
  const [units, setUnits] = useState('metric');

  async function load() {
    setCurrent(null);
    setError(null);
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setError('Access to location is needed to run the app');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`;
      const response = await fetch(weatherURL);
      const result = await response.json();

      if (response.ok) {
        setCurrent(result);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    load();
  }, [units]);

  if (current) {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.main}>
          <UnitsPicker units={units} setUnits={setUnits} />
          <Reload load={load} />
          <WeatherInfo current={current} />
        </View>
        <WeatherDetails current={current} units={units} />
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Reload load={load} />
        <Text style={{ textAlign: 'center' }}>{error}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <ActivityIndicator size='large' color={colors.PRIMARY} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});
