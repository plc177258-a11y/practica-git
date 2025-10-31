import  { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [num, setnum] = useState(0);
  const [resultado, setresultado]= useState(null);
  let con= parseInt(num-1);
  let lista=[];
  const anteriores = () =>{
  if(num==0){
    setresultado(['Ingresa un numero mayor a 0'])
    return;
  }else{
  while(con>=0){
    lista.push(con);
    {con>0? lista.push(', '):lista.push('.')};
    
    con--;
    }
  setresultado(lista);
  }
  };
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Numeros anteriores al numero ingresado</Text>
      <TextInput 
        placeholder="Ingresa un numero" 
        keyboardType="numeric"
        style={{ borderWidth:2, padding:10, marginBottom:20, width:260 }}
        onChangeText={setnum}></TextInput>
      <Button title="Calcular" onPress={anteriores} />
      {resultado !==null && <Text style={{marginTop:10}}>Los numeros anteriores son: {resultado}</Text>}
      
    </View>
  );
}
