import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

export default ColorPalette = ({ navigation }) => {
	const [colorGroups, setColorGroups] = useState([]);

	const fetchColorPalettes = useCallback(async () => {
		const result = await fetch(
			'https://color-palette-api.kadikraman.now.sh/palettes',
		);
		const colorSets = await result.json();
		if (result.ok) {
			setColorGroups(colorSets);
		}
	});

	useEffect(() => {
		fetchColorPalettes();
	}, []);
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.header}>
				<Text style={[styles.hello, styles.center]}>Color Palettes</Text>
				<Text style={[styles.bold, styles.center]}>
					Here are some boxes of different colors.
				</Text>
			</View>
			<FlatList
				data={colorGroups}
				keyExtractor={(item) => item.paletteName + item.id}
				renderItem={({ item }) => (
					<PalettePreview nav={navigation} colors={item} />
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
		color: '#432fa8',
		fontSize: 26,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 2,
	},
	bold: {
		fontWeight: 'bold',
	},
	center: {
		textAlign: 'center',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	paletteName: {
		backgroundColor: '#f1f000',
		paddingVertical: 20,
		paddingHorizontal: 20,
		textAlign: 'center',
	},
});
