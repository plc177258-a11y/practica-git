import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [numero, setnumero]=useState(0);
  const [mostrar, setmostrar]=useState(null);
  const tabla =()=>{
    const tabla =[];
    for(let x=0; x<11; x++){
      let resultado=numero*x;
      tabla.push(numero);
      tabla.push(' x ');
      tabla.push(x)
      tabla.push(' = ');
      tabla.push(resultado);
      tabla.push('\n');
    }
    setmostrar(tabla);
  };

  return (
    <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Tabla de Multiplicar</Text>
      <TextInput
      placeholder="Ingrese tabla de Multiplicar"
      keyboardType="numeric"
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={setnumero}
      ></TextInput>
      <Button style={{marginTop:10}} title="Inicio" onPress={tabla}/>
      <Text>{mostrar}</Text>
    </View>
  );
}
