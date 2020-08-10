import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
} from "react-native";
import Colorbox from "../components/Colorbox";

export default ColorPalette = () => {
  const buttons = [
    {
      title: "Flatlist",
      data: [
        {
          name: "Cyan",
          colorName: "cyan",
        },
        {
          name: "Magenta",
          colorName: "magenta",
        },
        {
          name: "Blue",
          colorName: "blue",
        },
      ],
    },
    {
      title: "Sectionlist",
      data: [
        {
          name: "Green",
          colorName: "green",
        },
        {
          name: "Yellow",
          colorName: "yellow",
        },
        {
          name: "Purple",
          colorName: "purple",
        },
        {
          name: "Red",
          colorName: "red",
        },
        {
          name: "Orange",
          colorName: "orange",
        },
        {
          name: "Brown",
          colorName: "brown",
        },
        {
          name: "Navy",
          colorName: "navy",
        },
        {
          name: "Dark Red",
          colorName: "darkred",
        },
        {
          name: "Aquamarine",
          colorName: "aquamarine",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={[styles.hello, styles.center]}>Color Palette</Text>
        <Text style={[styles.bold, styles.center]}>
          Here are some boxes of different colors.
        </Text>
      </View>
      <SectionList
        sections={buttons}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({ section }) => (
          <Text style={styles.headerText}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <Colorbox name={item.name} bgcolor={item.colorName} />
        )}
        ListEmptyComponent={
          <Text style={styles.center}>This list is empty</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    marginVertical: 20,
  },
  hello: {
    color: "#432fa8",
    fontSize: 26,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
