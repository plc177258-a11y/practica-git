import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-web';

export default function App() {
  const[lapices, setlapices]=useState(0);
  const[mos,setmos]=useState(null)
  let precio=0;
  const calculo =()=>{
    if(lapices>=100){
      precio=0.80
    }
    if(lapices<100&&lapices>50){
      precio=1.20
    }
     if(lapices<=50&&lapices>=30){
      precio=1.50
    }
      if(lapices<30){
      precio=2.10
    }
    setmos(lapices*precio)
  }
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Total de la compra de lapices de colores</Text>
      <TextInput
      placeholder="Ingrese la cantidad de lapices"
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setlapices}
      ></TextInput>
      <Button style={{marginTop:10}} title='Calculo' onPress={calculo}/>
      <Text>${mos}</Text>
    </View>
  );
}