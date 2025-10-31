import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const frutas = ["Manzana", "Plátano", "Naranja", "Uvas", "Mango", "Sandía"];

  return (
    <View style={{ flex:1, padding:20, backgroundColor:'#f8f9fa' }}>
      <Text style={{ fontSize:24, fontWeight:'bold', marginBottom:15, textAlign:'center' }}>
        🍎 Lista de Frutas 🍌
      </Text>

      <FlatList 
        data={frutas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{
            backgroundColor:'#fff',
            padding:15,
            marginVertical:6,
            marginHorizontal:10,
            borderRadius:10,
            elevation:3, // sombra en Android
            shadowColor:'#000', // sombra en iOS
            shadowOffset:{ width:0, height:2 },
            shadowOpacity:0.2,
            shadowRadius:3,
          }}>
            <Text style={{ fontSize:18 }}>
              {index + 1}. {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
