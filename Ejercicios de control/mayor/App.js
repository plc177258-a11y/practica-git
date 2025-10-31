import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [num, setnum]=useState(0);
  const [num2, setnum2]=useState(0);
  const [num3, setnum3]=useState(0);
  const [num4, setnum4]=useState(0);
  const [num5, setnum5]=useState(0);
  let [nmayor,setnmayor]=useState(0);
  const mayor=()=>{
    const n1 = Number(num);
    const n2 = Number(num2);
    const n3 = Number(num3);
    const n4 = Number(num4);
    const n5 = Number(num5);
    nmayor=n1;
    if(n2>nmayor){
      nmayor=n2}
      if(n3>nmayor){
      nmayor=n3}
      if(n4>nmayor){
      nmayor=n4}
      if(n5>nmayor){
      nmayor=n5}
      setnmayor(nmayor);
  };
  return (
    <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Ingresa 5 numeros, para observar el mayor</Text>
      <TextInput
      placeholder='Ingrese un numero'
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setnum}
      ></TextInput>
      <TextInput
      placeholder='Ingrese un numero'
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setnum2}
      ></TextInput>
      <TextInput
      placeholder='Ingrese un numero'
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setnum3}
      ></TextInput>
      <TextInput
      placeholder='Ingrese un numero'
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setnum4}
      ></TextInput>
      <TextInput
      placeholder='Ingrese un numero'
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setnum5}
      ></TextInput>
      <Button style={{marginTop:10}} title='Inicio' onPress={mayor}/>
      <Text>{nmayor}</Text>
    </View>
  );
}
