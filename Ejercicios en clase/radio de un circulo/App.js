import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [diametro, setDiametro] = useState('');
  const [radio, setRadio] = useState(null);

  const calcularRadio = () => {
    const valor = parseFloat(diametro);
    if (isNaN(valor) || valor <= 0) {
      setRadio('Por favor ingresa un número válido');
      return;
    }
    const resultado = (valor / 2).toFixed(2);
    setRadio(`El radio del círculo es: ${resultado}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Radio</Text>

      <TextInput
        placeholder="Ingresa el diámetro"
        keyboardType="numeric"
        style={styles.input}
        value={diametro}
        onChangeText={setDiametro}
      />

      <Button title="Calcular Radio" onPress={calcularRadio} color="#007AFF" />

      {radio !== null && (
        <Text style={styles.result}>{radio}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E9F2FF',
    padding:20,
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
    color:'#333',
  },
  input: {
    borderWidth:2,
    borderColor:'#007AFF',
    borderRadius:10,
    padding:10,
    marginBottom:20,
    width:250,
    textAlign:'center',
    backgroundColor:'#fff',
  },
  result: {
    marginTop:20,
    fontSize:16,
    color:'#000',
    fontWeight:'600',
    textAlign:'center',
  },
});

