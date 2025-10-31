import React, { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9' }}>
      <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: 'bold' }}>
        Cálculo del área y perímetro de un cuadrado
      </Text>

      <TextInput
        placeholder="Ingresa un lado del cuadrado (cm)"
        keyboardType="numeric"
        style={{
          borderWidth: 2,
          borderColor: '#2196F3',
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
          width: 260,
          textAlign: 'center'
        }}
        onChangeText={setLado}
        value={lado}
      />

      <Button title="Calcular" onPress={calcular} color="#2196F3" />

      {area !== null && (
        <Text style={{ marginTop: 20, fontSize: 16 }}>
          {typeof area === 'number'
            ? `El área del cuadrado es: ${area} cm²`
            : area}
        </Text>
      )}

      {perimetro !== null && (
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          El perímetro del cuadrado es: {perimetro} cm
        </Text>
      )}
    </View>
  );
}

