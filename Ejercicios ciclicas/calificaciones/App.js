import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  let [Cal, setCal]=useState(0);
  const [ncal, setncal]=useState(1);
  const  [mos,setmostrar]=useState(null);
  const [TCal,setTCal] =useState([]);
  const limpiar=()=>{
    setCal('');  }
  const asignar =()=>{
    if(Cal<=10&&Cal>=6){
      {ncal<10&&setncal(ncal+1)};
      {ncal<11&&setTCal([...TCal,'Cal ',ncal,': ', Cal,'\n'])}
    }else{
      alert('Ingrese otro numero que este en el rango de 6 y 10');
    }
    {ncal>9&&alert('Ya ingreso las 10 calificaciones')}
    limpiar();
  };
  const Mostrar=()=>{
    setmostrar(TCal);
  };
  const borrar =()=>{
    setCal('');
    setTCal([]);
    setncal(1);
    setmostrar('');
  }
  return (
    <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Calificacion {ncal}</Text>
      <br />
      <TextInput
      placeholder="Ingrese la Calificacion"
      keyboardType="numeric"
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      value={Cal}
      onChangeText={setCal}>
      </TextInput>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 260, marginTop: 10}}>
      <Button style={{marginTop:10}} title='Asignar' onPress={asignar}/>
      <Button style={{marginTop:10}} title='Mostrar' onPress={Mostrar}/>
      <Button style={{marginTop:10}} title='Borrar' onPress={borrar}/>
      </View>
      <Text>{mos}</Text>
    </View>
  );
}
