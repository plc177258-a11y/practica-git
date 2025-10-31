import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const[mostrar, setmostrar]=useState(null);
  const pares =()=>{
    const par=[];
    for(let x=1; x<16; x++){
      if(x%2==0){
        par.push(x);
        {x<14&&par.push(', ')}
        {x==14&&par.push('. ')}
      }
    }
    setmostrar(par)
    };
  return (
    <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Pares del 1 al 15</Text>
      <Button style={{marginTop:10}}title="iniciar" onPress={pares}/>
      <Text>{mostrar}</Text>
    </View>
  );
}
