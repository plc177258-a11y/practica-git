import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [cal1, setCal1] = useState('');
  const [cal2, setCal2] = useState('');
  const [cal3, setCal3] = useState('');
  const [cal4, setCal4] = useState('');
  const [resultado, setResultado] = useState(null);

  const promedio = () => {
    const c1 = parseFloat(cal1);
    const c2 = parseFloat(cal2);
    const c3 = parseFloat(cal3);
    const c4 = parseFloat(cal4);

    if ([c1, c2, c3, c4].some(isNaN)) {
      setResultado('Por favor ingresa solo números válidos.');
      return;
    }

    const promedioFinal = ((c1 + c2 + c3 + c4) / 4).toFixed(2);
    setResultado(promedioFinal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promedio de Calificaciones</Text>

      <TextInput
        placeholder="Ingresar 1ra Calificación"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setCal1}
        value={cal1}
      />
      <TextInput
        placeholder="Ingresar 2da Calificación"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setCal2}
        value={cal2}
      />
      <TextInput
        placeholder="Ingresar 3ra Calificación"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setCal3}
        value={cal3}
      />
      <TextInput
        placeholder="Ingresar 4ta Calificación"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setCal4}
        value={cal4}
      />

      <Button title="Calcular Promedio" onPress={promedio} color="#007AFF" />

      {resultado !== null && (
        <Text style={styles.result}>
          {isNaN(resultado)
            ? resultado
            : `El promedio es: ${resultado}`}
        </Text>
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
    color: '#222',
  },
  input: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
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
