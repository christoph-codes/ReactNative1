import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Color = (props) => {
    // console.log(props.route.params.bgcolor);
    const details = props.route.params;
    return (
        <View style={[{backgroundColor: details.bgcolor}, styles.page]}>
            <Text style={styles.colorname}>
                {details.name}
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