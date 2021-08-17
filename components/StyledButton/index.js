import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const StyledButton = ({ type, onPress, content }) => {
	const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
	const textColor = type === 'primary' ? '#FFFFFF' : '#171A20CC';

	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => onPress()}
				style={[styles.button, { backgroundColor }]}
			>
				<Text style={[styles.text, { color: textColor }]}>{content}</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;
