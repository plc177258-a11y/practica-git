import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-web';

export default function App() {
  const[horas, sethoras]=useState(0);
  const[mos,setmos]=useState(0)
  const calculo =()=>{
    if(horas<=40){
      setmos(horas*50);
    }
     if(horas>40){
      setmos((40*50)+((horas-40)*70));
    }
  }
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Salario total incluyendo horas extras</Text>
      <TextInput
      placeholder="Ingrese las horas trabajadas"
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={sethoras}
      ></TextInput>
      <Button style={{marginTop:10}} title='Calculo' onPress={calculo}/>
      <Text> El salario es de ${mos}</Text>
    </View>
  );
}
