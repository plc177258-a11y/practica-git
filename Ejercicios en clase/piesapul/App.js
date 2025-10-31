import { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [pies, setpies] = useState(0);
  const [resultado, setResultado]= useState(null);
  const conversion = () => {
    setResultado((parseFloat(pies)*12).toFixed(2))
  };
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Convertir pies a pulgadas</Text>
      <TextInput 
        placeholder="Ingresa los pies a convertir" 
        keyboardType="numeric"
        style={{ borderWidth:2, padding:10, marginBottom:20, width:250 }}
        onChangeText={setpies}></TextInput>
      <Button title="Calcular" onPress={conversion}/>
      {resultado !==null && <Text style={{marginTop:10}}>En pies es : {resultado}</Text>}
      
    </View>
  );
}
