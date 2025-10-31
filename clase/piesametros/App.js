import React, { useState } from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [pies, setPies] = useState('');
  const [resultado, setResultado] = useState(null);

  const conversion = () => {
    const valor = parseFloat(pies);
    if (isNaN(valor)) {
      setResultado('Por favor ingresa un número válido');
      return;
    }

    const metros = (valor * 0.3048).toFixed(2);
    setResultado(`${metros} metros`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de pies a metros</Text>

      <TextInput
        placeholder="Ingresa los pies a convertir"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setPies}
        value={pies}
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
    textAlign:'center',
  },
  input: {
    borderWidth:2,
    borderColor:'#007AFF',
    borderRadius:10,
    padding:10,
    marginBottom:20,
    width:200,
    textAlign:'center',
    backgroundColor:'#fff',
  },
  result: {
    marginTop:20,
    fontSize:16,
    fontWeight:'600',
    color:'#000',
    textAlign:'center',
  },
});

