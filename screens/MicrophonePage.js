import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MicrophonePage = ({ navigation }) => {
  const [micStatus, setMicStatus] = useState('off');

  const toggleMic = () => {
    setMicStatus(micStatus === 'off' ? 'on' : 'off');
    // You can add microphone handling logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Microphone</Text>
      <Text style={styles.statusText}>Microphone is {micStatus}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Microphone" onPress={toggleMic} color="#6200EE" />
      </View>
      <View style={styles.navigationButtons}>
        <Button title="Go to Recording" onPress={() => navigation.navigate('Recording')} color="#03DAC5" />
        <Button title="Go to Bluetooth" onPress={() => navigation.navigate('Bluetooth')} color="#03DAC5" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1677', // Changed background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Added white text color
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    color: '#FFFFFF', // Added white text color
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default MicrophonePage;
