import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [kilos, setKilos] = useState('');
  const [resultado, setResultado] = useState(null);

  const conversion = () => {
    const valor = parseFloat(kilos);
    if (isNaN(valor)) {
      setResultado('Por favor ingresa un número válido');
      return;
    }
    const libras = (valor * 2.20462).toFixed(2);
    setResultado(`${libras} lb`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversión de Kilos a Libras</Text>

      <TextInput
        placeholder="Ingresa los kilos a convertir"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setKilos}
        value={kilos}
      />

      <Button title="Calcular" onPress={conversion} color="#007AFF" />

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F2F7FF',
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
    width:260,
    textAlign:'center',
    backgroundColor:'#fff',
  },
  result: {
    marginTop:20,
    fontSize:16,
    fontWeight:'600',
    color:'#000',
  },
});
