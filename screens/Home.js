import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default Home = ({ navigation }) => {
  return (
    <View>
      <Text style={[styles.mainHeader, styles.center]}>My First App</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Color Palettes");
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.center}>Color Palette »</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    color: "#432fa8",
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginVertical: 10,
  },
  btn: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: "lightblue",
    borderRadius: 50,
    marginVertical: 10,
  },
  center: {
    textAlign: "center",
  },
});
