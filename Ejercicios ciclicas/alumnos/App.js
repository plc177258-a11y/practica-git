import { useState } from 'react';
import { TextInput, Text, View,Button } from 'react-native';

export default function App() {
  const [cal1, setcal1]=useState(0);
  const [cal2, setcal2]=useState(0);
  const [cal3, setcal3]=useState(0);
  const [mos, setmos]=useState(null);
  const [alu, setalu]=useState(1);
  const [Alumnos, setAlumnos]=useState([]);
  const limpiar =()=>{
    setcal1('');
    setcal2('');
    setcal3('');
  };
  const asig = ()=>{
    const calalu = {
      id: alu,cal1,cal2,cal3
    };
    setAlumnos([...Alumnos,calalu])
    alert('Alumno Asignado')
    {alu<=4&&setalu(alu+1);
  };
  limpiar();
};
  const mostrar =()=>{
    const texto =
      Alumnos.map (
        (a) => `Alumno ${a.id}:\nCal1: ${a.cal1} \nCal2: ${a.cal2} \nCal3: ${a.cal3}\n`
      )
      setmos(texto);
  };
  const borrar =()=>{
    setAlumnos([]);
    setalu(1);
    setmos('');
    setcal1('');
    setcal2('');
    setcal3('');
  };
 return (
     <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text style={{fontSize:30, marginTop:10}} >Alumno {alu}</Text>
        <br />
         <Text>Calificacion 1</Text>
         <TextInput
         placeholder="Ingresa la calificacion"
         keyboardType="numeric"
         style={{ borderWidth:2, padding:10, marginBottom:20, width:260 }}
         value={cal1}
         onChangeText={setcal1}
         ></TextInput>
         <Text>Calificacion 2</Text>
         <TextInput
         placeholder="Ingresa la calificacion"
         keyboardType="numeric"
         style={{ borderWidth:2, padding:10, marginBottom:20, width:260 }}
         value={cal2}
         onChangeText={setcal2}
         ></TextInput>
         <Text>Calificacion 3</Text>
         <TextInput
         placeholder="Ingresa la calificacion"
         keyboardType="numeric"
         style={{ borderWidth:2, padding:10, marginBottom:20, width:260 }}
         value={cal3}
         onChangeText={setcal3}
         ></TextInput>
         <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 260, marginTop: 10}}>
       <Button style={{marginTop:10}}title="Asignar" onPress={asig} />
       <Button style={{marginTop:10}}title="Mostrar" onPress={mostrar} />
       <Button style={{marginTop:10}}title="Resetear" onPress={borrar} />
       </View>
       <Text style={{marginTop:10}}>{mos}</Text>
     </View>
   );
}
