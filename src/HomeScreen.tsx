import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useFlag, useUnleashClient } from "@unleash/proxy-client-react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { RootStackParams } from "./Navigation";
import RemoteComponent from "./RemoteComponent";
import ExperimentComponent from "./ExperimentComponent";

export const HomeScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParams>>();

	const client = useUnleashClient();
	const isFFKilling = !useFlag("button_status");
	const rollOutFlag = useFlag("roll_out_flag");
	const attribute_eval = useFlag("attribute_eval");

	return (
		<View style={styles.container}>
			<ExperimentComponent />
			<RemoteComponent />
			<Button
				icon="access-point"
				mode="contained"
				onPress={() => {
					client.setContextField("appVersion", "1.0.2");
					console.log("Pressed");
				}}
			>
				Segmentación Attr by app version -- {attribute_eval ? "✅" : "⚠️"}
			</Button>
			<Button
				icon="percent"
				mode="contained"
				onPress={() => console.log("Pressed")}
			>
				Roll out {rollOutFlag ? "elegido" : "no elegido"}
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
