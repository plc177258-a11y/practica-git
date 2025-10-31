import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [cantidad, setCantidad] = useState('');
  const [total, setTotal] = useState(null);

  const calcularTotal = () => {
    const bate = parseInt(cantidad);
    if (isNaN(bate) || bate <= 0) {
      setTotal('Ingresa una cantidad válida');
      return;
    }

    let precioTotal = 0;
    if (bate <= 10) {
      precioTotal = bate * 250;
    } else {
      precioTotal = 10 * 250 + (bate - 10) * 230;
    }

    setTotal(`Se compraron ${bate} bates y el costo total es $${precioTotal}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra de bates de béisbol</Text>

      <TextInput
        placeholder="Cantidad de bates"
        keyboardType="numeric"
        style={styles.input}
        value={cantidad}
        onChangeText={setCantidad}
      />

      <Button title="Calcular" onPress={calcularTotal} color="#FF6347" />

      {total !== null && <Text style={styles.result}>{total}</Text>}
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
});
