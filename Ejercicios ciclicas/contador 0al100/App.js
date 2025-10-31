import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const[mostrar, setmostrar]=useState(null);
  const diez =()=>{
    const numeros=[];
    for(let x=0; x<101; x++){
      if(x%10==0&&x!=0){
        numeros.push(x);
        {x<100&&numeros.push(', ')}
        {x==100&&numeros.push('. ')}
      }
    }
    setmostrar(numeros)
    };
  return (
    <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Numeros del 0-100, de diez en diez</Text>
      <Button style={{marginTop:10}}title="iniciar" onPress={diez}/>
      <Text>{mostrar}</Text>
    </View>
  );
}
