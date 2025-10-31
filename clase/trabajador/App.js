import { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const sal = 80*50;
  const dimms = sal*0.015;
  const diset = sal*0.012;
  const [hextras, sethextras] = useState(0);
  const [resultado, setResultado]= useState(null);
  const conversion = () => {
    setResultado(((((sal*0.2)+sal)-dimms)-diset)+(hextras*50))
  };
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Calcular el salario neto de un obrero con horas extras</Text>
      <TextInput 
        placeholder="Ingresa las horas extras" 
        keyboardType="numeric"
        style={{ borderWidth:2, padding:10, marginBottom:20, width:200 }}
        onChangeText={sethextras}></TextInput>
      <Button title="Calcular" onPress={conversion}/>
      {resultado !==null && <Text style={{marginTop:10}}>El salario incluyendo horas extras es de: {resultado}</Text>}
      
    </View>
  );
}
