import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [horas, setHoras] = useState('');
  const [salario, setSalario] = useState(null);

  const calcularSalario = () => {
    const h = parseFloat(horas);
    if (isNaN(h) || h < 0) {
      setSalario('Ingresa un número válido de horas');
      return;
    }

    let sueldo = 0;
    if (h <= 40) {
      sueldo = h * 14;
    } else {
      sueldo = 40 * 14 + (h - 40) * 26;
    }

    setSalario(`$${sueldo.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de salario de obrero</Text>

      <TextInput
        placeholder="Ingresa las horas trabajadas"
        keyboardType="numeric"
        style={styles.input}
        value={horas}
        onChangeText={setHoras}
      />

      <Button title="Calcular" onPress={calcularSalario} color="#FF6347" />

      {salario !== null && <Text style={styles.result}>Salario: {salario}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF5EE',
    padding:20,
  },
  title: {
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20,
    color:'#333',
    textAlign:'center',
  },
  input: {
    borderWidth:2,
    borderColor:'#FF6347',
    borderRadius:8,
    padding:12,
    marginBottom:20,
    width:250,
    textAlign:'center',
    backgroundColor:'#fff',
  },
  result: {
    marginTop:20,
    fontSize:18,
    fontWeight:'600',
    color:'#000',
    textAlign:'center',
  },
})