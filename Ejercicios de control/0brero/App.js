import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const salarioBase = 80 * 50; 
  const descuentoIMSS = salarioBase * 0.015;
  const descuentoISR = salarioBase * 0.012;

  const [salarioNeto, setSalarioNeto] = useState(null);

  const calcularSalario = () => {
    const neto = salarioBase * 1.2 - descuentoIMSS - descuentoISR;
    setSalarioNeto(neto.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de salario neto</Text>
      <Button title="Calcular Salario" onPress={calcularSalario} color="#FF6347" />

      {salarioNeto !== null && (
        <Text style={styles.result}>Salario neto: ${salarioNeto}</Text>
      )}
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
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
    color:'#333',
    textAlign:'center',
  },
  result: {
    marginTop:20,
    fontSize:18,
    fontWeight:'600',
    color:'#000',
  },
});
