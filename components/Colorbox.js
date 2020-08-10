import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default Colorbox = ({ bgcolor, name}) => {
    const boxColor = {
        backgroundColor: bgcolor,
    }
    return (
      <View style={[styles.box, boxColor]}>
        <Text style={styles.boxText}>{name}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: 20,
        marginVertical: 5,
        alignItems: 'center',
    },
    boxText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})