import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-web';

export default function App() {
  const[balon, setbalon]=useState(0);
  const[mos,setmos]=useState(null)
  let precio=0;
  const calculo =()=>{
    if(balon>15){
      precio=85
    }
    if(balon>10&&balon<=15){
      precio=92
    }
    if(balon<=10){
      precio=99
    }
    setmos(balon*precio)
  }
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Total de la compra de los balones de futbol</Text>
      <TextInput
      placeholder="Ingrese la cantidad de balones"
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setbalon}
      ></TextInput>
      <Button style={{marginTop:10}} title='Calculo' onPress={calculo}/>
      <Text>${mos}</Text>
    </View>
  );
}