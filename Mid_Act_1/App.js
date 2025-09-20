import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    setLoading(true);
    try {
      const dataArray = inputData.split(',').map(item => item.trim()); // Split input string into an array
      const response = await axios.post('YOUR_API_ENDPOINT', { data: dataArray }); // Replace with your actual API endpoint
      setResponseData(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      Alert.alert("Error", "Failed to process data. Please check your input and API endpoint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BFHL Data Processor</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter comma-separated data (numbers and alphabets)"
        value={inputData}
        onChangeText={text => setInputData(text)}
      />
      <Button
        title={loading ? "Processing..." : "Process Data"}
        onPress={handleApiCall}
        disabled={loading}
      />

      {responseData && (
        <View style={styles.responseContainer}>
          <Text style={styles.subtitle}>API Response:</Text>
          <Text>Is Success: {responseData.is_success ? 'True' : 'False'}</Text>
          <Text>User ID: {responseData.user_id}</Text>
          <Text>Email: {responseData.email}</Text>
          <Text>Roll Number: {responseData.roll_number}</Text>
          <Text>Numbers: {responseData.numbers.join(', ')}</Text>
          <Text>Alphabets: {responseData.alphabets.join(', ')}</Text>
          <Text>Odd Numbers: {responseData.odd_numbers.join(', ')}</Text>
          <Text>Even Numbers: {responseData.even_numbers.join(', ')}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  responseContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
