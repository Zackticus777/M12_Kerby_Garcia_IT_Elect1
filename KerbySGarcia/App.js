
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Button, Text } from "react-native";

export default function App() {
  const [bgColor, setBgColor] = useState("#FFFFFF"); // default background color
  const [count, setCount] = useState(0); // counter state

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      {/* Counter App */}
      <View style={styles.counterSection}>
        <Text style={styles.counterText}>{count}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => setCount(count + 1)} />
          <Button title="-" onPress={() => setCount(count - 1)} />
        </View>
      </View>

      {/* Color Changer Buttons */}
      <View style={styles.colorSection}>
        <Button title="White" onPress={() => setBgColor("#FFFFFF")} />
        <Button title="Light Blue" onPress={() => setBgColor("#ADD8E6")} />
        <Button title="Light Green" onPress={() => setBgColor("#90EE90")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  counterSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: { fontSize: 50, fontWeight: "bold", marginBottom: 20 },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  colorSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});