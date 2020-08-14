import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default PalettePreview = ({ colors, nav }) => {
	return (
		<TouchableOpacity onPress={() => nav.navigate('Color List', colors)}>
			<View style={styles.PalettePreview}>
				<Text>{colors.paletteName}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	PalettePreview: {
		backgroundColor: '#f1f000',
		paddingVertical: 20,
		paddingHorizontal: 20,
		textAlign: 'center',
	},
	smallbox: {
		height: 50,
		width: 50,
	},
});
