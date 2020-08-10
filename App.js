import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";
import Colorbox from "./components/Colorbox";

export default App = () => {
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
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World</Text>
      </View>

      <View>
        <Text style={[styles.bold]}>
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
  hello: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  container: {
    paddingHorizontal: 50,
    marginTop: 50,
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
