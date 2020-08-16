import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { colors } from '../utils';

export const WeatherInfo = ({ current }) => {
  const {
    main: { temp },
    weather: [details],
    name,
  } = current;

  const { icon, main, description } = details;
  const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image source={{ uri: iconURL }} style={styles.weatherIcon} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
  textPrimary: {
    fontSize: 40,
    color: colors.PRIMARY,
  },
  textSecondary: {
    fontSize: 20,
    color: colors.SECONDARY,
    fontWeight: '500',
    marginTop: 10,
  },
});
