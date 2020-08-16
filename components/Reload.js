import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../utils';

export const Reload = ({ load }) => {
  const name = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';

  return (
    <View style={styles.reload}>
      <Ionicons onPress={load} name={name} color={colors.PRIMARY} size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  reload: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});
