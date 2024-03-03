// components/BottomNavigationBar.js
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BottomNavigationBar({onCameraPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="settings" size={24} color="black" />
      </TouchableOpacity >
      <TouchableOpacity style={styles.iconContainer} onPress={onCameraPress}>
        <MaterialIcons name="photo-camera" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name="photo-library" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

