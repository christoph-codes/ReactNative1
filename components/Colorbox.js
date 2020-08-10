import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default Colorbox = ({ bgcolor, name, nav }) => {
  const boxColor = {
    backgroundColor: bgcolor,
  };
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate("Color", {bgcolor, name});
      }}
    >
      <View style={[styles.box, boxColor]}>
        <Text style={styles.boxText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 20,
    marginVertical: 5,
    alignItems: "center",
  },
  boxText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
