import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

export default function App() {
  const [pantalla, setPantalla] = useState("Inicio");

  if (pantalla === "Inicio") {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontSize:22, marginBottom:20 }}>🏠 Pantalla Inicio</Text>
        <Button title="Ir a Perfil" onPress={() => setPantalla("Perfil")} />
      </View>
    );
  }

  if (pantalla === "Perfil") {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontSize:22, marginBottom:20 }}>👤 Pantalla Perfil</Text>
        <Button title="Regresar a Inicio" onPress={() => setPantalla("Inicio")} />
      </View>
    );
  }

  return null;
}
