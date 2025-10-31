import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Simple</Text>
      <Text style={styles.counter}>{contador}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.add]}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.btnText}>➕</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.subtract]}
          onPress={() => setContador(contador - 1)}
        >
          <Text style={styles.btnText}>➖</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.reset]}
        onPress={() => setContador(0)}
      >
        <Text style={styles.btnText}>🔄 Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  counter: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2d89ef",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 4,
  },
  add: {
    backgroundColor: "#4CAF50",
  },
  subtract: {
    backgroundColor: "#f44336",
  },
  reset: {
    backgroundColor: "#ff9800",
  },
  btnText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
})