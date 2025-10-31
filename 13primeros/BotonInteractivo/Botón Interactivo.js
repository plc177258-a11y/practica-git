import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState("cumpleaños");

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>{mensaje}</Text>
      <Button title="Cambiar Texto" onPress={() => setMensaje("¡09/07/2006!")} />
    </View>
  );
}