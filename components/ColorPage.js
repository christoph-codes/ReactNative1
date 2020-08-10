import React from 'react';
import { View, Text } from 'react-native';

export default ColorPage = (props) => {
    return (
        <View style={styles.ColorPage}>
            <Text>
                {props.colorName}
            </Text>
        </View>
    );
}

const styles = Stylesheet.create({
    ColorPage: {
        backgroundColor: props.color,
        flex: 1,
        justifyItems: 'center',
        alignItems: 'center',
    }
});