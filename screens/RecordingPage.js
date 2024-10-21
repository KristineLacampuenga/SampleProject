import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AudioRecord from 'react-native-audio-record';

const RecordingPage = ({ navigation }) => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    AudioRecord.start(); // Start recording
  };

  const stopRecording = () => {
    setIsRecording(false);
    AudioRecord.stop(); // Stop recording
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recording</Text>
      <Text style={styles.statusText}>{isRecording ? 'Recording...' : 'Not Recording'}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={isRecording ? 'Stop Recording' : 'Start Recording'}
          onPress={isRecording ? stopRecording : startRecording}
          color={isRecording ? "#B00020" : "#6200EE"}
        />
      </View>
      <View style={styles.navigationButtons}>
        <Button title="Go to Microphone" onPress={() => navigation.navigate('Microphone')} color="#03DAC5" />
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

export default RecordingPage;
