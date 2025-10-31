import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularArea = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);
    if (!isNaN(b) && !isNaN(h)) {
      setResultado(b * h);
    } else {
      setResultado('Por favor ingresa valores numéricos válidos');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Cálculo del área de un rectángulo</Text>

      <TextInput
        placeholder="Ingresa en cm la base del rectángulo"
        keyboardType="numeric"
        style={{
          borderWidth: 2,
          borderColor: '#4CAF50',
          borderRadius: 10,
          padding: 10,
          marginBottom: 15,
          width: 260,
          textAlign: 'center'
        }}
        onChangeText={setBase}
      />

      <TextInput
        placeholder="Ingresa en cm la altura del rectángulo"
        keyboardType="numeric"
        style={{
          borderWidth: 2,
          borderColor: '#4CAF50',
          borderRadius: 10,
          padding: 10,
          marginBottom: 15,
          width: 260,
          textAlign: 'center'
        }}
        onChangeText={setAltura}
      />

      <Button title="Calcular área" onPress={calcularArea} color="#4CAF50" />

      {resultado !== null && (
        <Text style={{ marginTop: 20, fontSize: 16 }}>
          {typeof resultado === 'number'
            ? `El área del rectángulo es: ${resultado} cm²`
            : resultado}
        </Text>
      )}
    </View>
  );
}
