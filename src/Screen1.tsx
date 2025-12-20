import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useUnleashClient, useFlag } from "@unleash/proxy-client-react";
import { StyleSheet, Text, View } from "react-native";

export const Screen1Screen = () => {
	const client = useUnleashClient();

	useFocusEffect(
		useCallback(() => {
			client.updateContext({});
		}, [client])
	);

	const manualKill = useFlag("manual-kill-switch");

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Screen1: {manualKill ? "activado" : "desactivado"}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
