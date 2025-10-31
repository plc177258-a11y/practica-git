import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f5f5f5' }}>
      <Text style={{ fontSize:24, fontWeight:'bold', marginBottom:20 }}>
        Icono de React Native
      </Text>
      <Ionicons name="logo-react" size={80} color="#61DBFB" />
    </View>
  );
}
