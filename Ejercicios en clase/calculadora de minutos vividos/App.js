import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [edad, setEdad] = useState('');
  const [resultado, setResultado] = useState(null);

  const Vida = () => {
    const valor = parseInt(edad);
    if (isNaN(valor) || valor <= 0) {
      setResultado('Por favor ingresa una edad válida');
      return;
    }

    const minutos = valor * 365 * 24 * 60;
    setResultado(`Has vivido aproximadamente ${minutos.toLocaleString()} minutos`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcular minutos vividos</Text>

      <TextInput
        placeholder="Ingresa tu edad"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setEdad}
        value={edad}
      />

      <Button title="Calcular" onPress={Vida} color="#007AFF" />

      {resultado !== null && (
        <Text style={styles.result}>{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F9FF',
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
    width: 200,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
});
