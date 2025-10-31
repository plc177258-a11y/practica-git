import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [lado, setLado] = useState('');
  const [area, setArea] = useState(null);
  const [perimetro, setPerimetro] = useState(null);

  const calcular = () => {
    const l = parseFloat(lado);
    if (!isNaN(l)) {
      setArea(l * l);
      setPerimetro(4 * l);
    } else {
      setArea('Valor inválido');
      setPerimetro(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo del área y perímetro de un cuadrado</Text>

      <TextInput
        placeholder="Ingresa el lado en cm"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setLado}
        value={lado}
      />

      <Button title="Calcular" onPress={calcular} color="#2196F3" />

      {area !== null && (
        <Text style={styles.result}>
          {typeof area === 'number'
            ? `Área: ${area} cm²`
            : area}
        </Text>
      )}
      {perimetro !== null && (
        <Text style={styles.result}>Perímetro: {perimetro} cm</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    color: '#000',
  },
});
