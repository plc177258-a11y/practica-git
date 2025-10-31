import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [centi, setCenti] = useState('');
  const [resultado, setResultado] = useState(null);

  const conversion = () => {
    const c = parseFloat(centi);
    if (isNaN(c)) {
      setResultado('Por favor ingresa un número válido');
      return;
    }
    const f = (c * 1.8 + 32).toFixed(2);
    setResultado(`${f} °F`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de °C a °F</Text>

      <TextInput
        placeholder="Ingresa los grados Celsius"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setCenti}
        value={centi}
      />

      <Button title="Convertir" onPress={conversion} color="#007AFF" />

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F9FF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: 260,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});
