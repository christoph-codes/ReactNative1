import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Color = (props) => {

    const details = props.route.params;
    return (
        <View style={[{backgroundColor: details.hexCode}, styles.page]}>
            <Text style={styles.colorname}>
                {details.colorName}
            </Text>
            <Text style={styles.hexcode}>
                {details.hexCode}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorname: {
        fontSize: 42,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
});