import { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [inicio, setinicio]= useState(0);
  let con =1;
  let lista =[];
  const num = () =>{
    while(con<31){
      lista.push(con);
      {con<30? lista.push(', '):lista.push('.')};
      {con%7==0&&lista.push('\n')}
      con++;
    }
    setinicio(lista);
  };
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Numeros del 1-30 con salto cada 7 numeros</Text>
      <Button title="Inicio" onPress={num} />
      <Text style={{marginTop:10}}>{inicio}</Text>
    </View>
  );
}
