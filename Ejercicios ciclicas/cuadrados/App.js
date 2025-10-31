import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const[mostrar, setmostrar]=useState(null);
  const cuadrados =()=>{
    const numeros=[];
    for(let x=0; x<101; x++){
      let resultados=x*x;
      numeros.push(resultados);
      numeros.push(' ');
      {x%10==0&&numeros.push('\n')}
      }
      setmostrar(numeros)
    }
  return (
    <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Los cuadrados de los primeros 100 numeros</Text>
      <Button style={{marginTop:10}}title="iniciar" onPress={cuadrados}/>
      <Text>{mostrar}</Text>
    </View>
  );
}
