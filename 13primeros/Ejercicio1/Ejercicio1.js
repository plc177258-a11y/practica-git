import { Text, View } from 'react-native';

export default function App() {
  const nombreProyecto = "Ejercicio1"; 

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>{nombreProyecto}</Text>
      <Text>Hello World!</Text>
    </View>
  );
}
