import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [gal, setGal] = useState('');
  const [resultado, setResultado] = useState(null);

  const conversion = () => {
    const valor = parseFloat(gal);
    if (isNaN(valor)) {
      setResultado('Por favor ingresa un número válido');
      return;
    }

    const litros = (valor * 3.78541).toFixed(2);
    setResultado(`${litros} litros`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de galones a litros</Text>

      <TextInput
        placeholder="Ingresa los galones a convertir"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setGal}
        value={gal}
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
    backgroundColor: '#E9F2FF',
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
    width: 250,
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
