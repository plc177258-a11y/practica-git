import { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [pul, setpul] = useState(0);
  const [resultado, setResultado]= useState(null);
  const conversion = () => {
    setResultado((parseFloat(pul)*0.0254).toFixed(2))
  };
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Convertir pulgadas a metros</Text>
      <TextInput 
        placeholder="Ingresa las pulgadas a convertir" 
        keyboardType="numeric"
        style={{ borderWidth:2, padding:10, marginBottom:20, width:250 }}
        onChangeText={setpul}></TextInput>
      <Button title="Calcular" onPress={conversion}/>
      {resultado !==null && <Text style={{marginTop:10}}>En metros es : {resultado}</Text>}
      
    </View>
  );
}
