import { useMemo } from "react";
import { useVariant } from "@unleash/proxy-client-react";
import { Button } from "react-native-paper";

interface ExperimentPayload {
	buttonText: string;
	colorButton: string;
}

const ExperimentComponent = () => {
	const { enabled, name, payload } = useVariant("experiment_ab");

	const banner: ExperimentPayload = useMemo(() => {
		if (
			enabled &&
			(name === "variantA" || name === "variantB") &&
			payload?.type === "json"
		) {
			try {
				return JSON.parse(payload.value);
			} catch (error) {
				console.error("Error parsing Unleash payload", error);
			}
		}
	}, [enabled, name, payload]);

	const buttonText = banner?.buttonText ?? "Waiting";
	const colorButton = banner?.colorButton ?? "#000";

	return (
		<Button
			icon="ab-testing"
			mode="contained"
			textColor={colorButton}
			onPress={() => console.log("Pressed Test A/B")}
		>
			Experiment Test A/B == {buttonText}
		</Button>
	);
};

export default ExperimentComponent;
