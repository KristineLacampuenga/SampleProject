import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BleManager from 'react-native-ble-manager';

const BluetoothPage = ({ navigation }) => {
  const [bluetoothStatus, setBluetoothStatus] = useState('Disconnected');

  const connectBluetooth = () => {
    BleManager.start({ showAlert: false });
    // Implement Bluetooth connection logic here
    setBluetoothStatus('Connected');
  };

  const disconnectBluetooth = () => {
    // Implement Bluetooth disconnection logic here
    setBluetoothStatus('Disconnected');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bluetooth</Text>
      <Text style={styles.statusText}>Bluetooth is {bluetoothStatus}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Connect Bluetooth" onPress={connectBluetooth} color="#6200EE" />
        <Button title="Disconnect Bluetooth" onPress={disconnectBluetooth} color="#B00020" />
      </View>
      <View style={styles.navigationButtons}>
        <Button title="Go to Microphone" onPress={() => navigation.navigate('Microphone')} color="#03DAC5" />
        <Button title="Go to Recording" onPress={() => navigation.navigate('Recording')} color="#03DAC5" />
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

export default BluetoothPage;
