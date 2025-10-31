import { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [respuesta, setrespuesta]=useState('');
  const [pregunta, setpregunta]=useState("¿Desea continuar S/N?");
  const preguntar = ()=>{
      if(respuesta=='N'){
        setpregunta("Ya pare, de nada")
      }
  };
return (
    <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>{pregunta}</Text>
      <TextInput
      placeholder="Ingrese respuesta"
      keyboardType="text"
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setrespuesta}
      ></TextInput>
      <Button style={{marginTop:10}} title="Enviar" onPress={preguntar}/>
    </View>
  );
}
