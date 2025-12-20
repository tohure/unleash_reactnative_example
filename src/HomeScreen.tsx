import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useFlag } from "@unleash/proxy-client-react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { RootStackParams } from "./Navigation";

export const HomeScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParams>>();

	const isFFKilling = !useFlag("button_status");

	return (
		<View style={styles.container}>
			<Button
				icon="camera"
				mode="contained"
				onPress={() => console.log("Pressed")}
			>
				Press me
			</Button>
			<Button
				icon="camera"
				mode="contained"
				onPress={() => console.log("Pressed")}
			>
				Press me
			</Button>
			<Button
				disabled={isFFKilling}
				icon="power-standby"
				mode="contained"
				onPress={() => {
					navigation.navigate("Screen1");
					console.log("Kill switch pressed");
				}}
			>
				Kill switch
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 30,
	},
});
