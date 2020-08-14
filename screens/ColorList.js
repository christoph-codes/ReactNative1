import React from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Colorbox from '../components/Colorbox';

export default ColorList = (props) => {
	const colors = props.route.params.colors;
	const nav = props.navigation;
	return (
		<View>
			{colors.map((color, index) => {
				return (
					<TouchableOpacity
						key={index.toString()}
						onPress={() => nav.navigate('Color', color)}
					>
						<Colorbox bgcolor={color.hexCode} name={color.colorName} />
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	ColorList: {
		backgroundColor: 'green',
	},
});
