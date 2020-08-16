import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';

export function UnitsPicker({ units, setUnits }) {
  return (
    <View style={styles.units}>
      <Picker
        selectedValue={units}
        onValueChange={(item) => setUnits(item)}
        mode='dropdown'
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label='C' value='metric' />
        <Picker.Item label='F' value='imperial' />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  units: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 20,
      },
    }),
    height: 50,
    width: 100,
    left: 20,
  },
});
