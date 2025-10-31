import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-web';

export default function App() {
  const[bate, setbate]=useState(0);
  const[mos,setmos]=useState(0)
  let precio=0;
  const calculo =()=>{
    if(bate<10){
      precio=108
    }else{
      precio=100
    }
    setmos(bate*precio)
  }
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Total de la compra de los bates de beisbol</Text>
      <TextInput
      placeholder="Ingrese la cantidad de bates"
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setbate}
      ></TextInput>
      <Button style={{marginTop:10}} title='Calculo' onPress={calculo}/>
      <Text>${mos}</Text>
    </View>
  );
}