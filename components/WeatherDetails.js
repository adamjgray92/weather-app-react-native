import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../utils';

export const WeatherDetails = ({ current, units }) => {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = current;

  const windSpeed =
    units === 'metric'
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name='water'
              size={30}
              color={colors.PRIMARY}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Humidity</Text>
              <Text style={styles.textSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name='temperature-low'
              size={25}
              color={colors.PRIMARY}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels Like</Text>
              <Text style={styles.textSecondary}>{feels_like} </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: colors.BORDER,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: colors.BORDER,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name='weather-windy'
              size={30}
              color={colors.PRIMARY}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind speed</Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name='speedometer'
              size={30}
              color={colors.PRIMARY}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Pressure</Text>
              <Text style={styles.textSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetails: {
    margin: 15,
    marginTop: 'auto',
    borderWidth: 1,
    borderColor: colors.BORDER,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textSecondary: {
    fontSize: 15,
    color: colors.SECONDARY,
    fontWeight: '700',
    marginTop: 7,
  },
});
