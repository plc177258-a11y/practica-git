import { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const[cal, setcal]=useState(0);
  const[mos, setmos]=useState(null);
  const verificar= ()=>{
    if(cal>10||cal<0){
      setmos('Coloca otro numero')
    }else{
      setmos('La calificacion esta entre el 0-10')
    }
  };
 return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Calificacion del  0-10</Text>
        <TextInput
        placeholder="Ingresa la calificacion"
        keyboardType="numeric"
        style={{ borderWidth:2, padding:10, marginBottom:20, width:260 }}
        onChangeText={setcal}
        ></TextInput>
      <Button title="Verificar" onPress={verificar} />
      <Text style={{marginTop:10}}>{mos}</Text>
    </View>
  );
}
