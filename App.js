import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default App = () => {
    const buttons = [
        {
            name: 'Cyan',
            colorName: 'cyan'
        },
        {
            name: 'Magenta',
            colorName: 'magenta'
        },
        {
            name: 'Blue',
            colorName: 'Blue'
        },
        {
            name: 'Orange',
            colorName: 'orange'
        },
    ]
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World</Text>
      </View>
      <View>
        <Text style={[styles.bold]}>Here are some boxes of different colors.</Text>
      </View>
      {/* {buttons.map(btn => {
          return (
            <View style={[styles.button, styles.btn.colorName]}>
            <Text style={styles.bold}>{btn.name}</Text>
          </View>
          )
      })} */}
      <View style={[styles.button, styles.teal]}>
        <Text style={[styles.buttonText, styles.bold, styles.center]}>Cyan</Text>
      </View>
      <View style={[styles.button, styles.blue]}>
        <Text style={[styles.buttonText, styles.bold, styles.center]}>Blue</Text>
      </View>
      <View style={[styles.button, styles.magenta]}>
        <Text style={[styles.buttonText, styles.bold, styles.center]}>Magenta</Text>
      </View>
      <View style={[styles.button, styles.orange]}>
        <Text style={[styles.buttonText, styles.bold, styles.center]}>Orange</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginHorizontal: 10,
    },
    hello: {
        color: 'white',
        fontSize: 20,
        fontWeight: '300',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    container: {
        paddingHorizontal: 50,
        marginTop: 50,
    },
    center: {
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    button: {
        paddingVertical: 20,
        marginVertical: 5,
        justifyContent: 'center',
        color: 'white'
    },
    buttonText: {
        color: 'white',
    },
    teal: {
        backgroundColor: 'teal',
    },
    blue: {
        backgroundColor: 'blue',
    },
    magenta: {
        backgroundColor: 'magenta',
    },
    orange: {
        backgroundColor: 'orange',
    }
})