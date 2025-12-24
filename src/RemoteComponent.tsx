import { useMemo } from "react";
import { useVariant } from "@unleash/proxy-client-react";
import { Button } from "react-native-paper";

interface BannerPayload {
	text: string;
	emoji: string;
}

const RemoteComponent = () => {
	const { enabled, name, payload } = useVariant("remoteconfig_flag");

	const banner: BannerPayload = useMemo(() => {
		if (enabled && name === "bannerText" && payload?.type === "json") {
			try {
				return JSON.parse(payload.value);
			} catch (error) {
				console.error("Error parsing Unleash payload", error);
			}
		}
	}, [enabled, name, payload]);

	const text = banner?.text ?? "";
	const emoji = banner?.emoji ?? "";

	return (
		<Button
			icon="remote-desktop"
			mode="contained"
			onPress={() => console.log("Pressed remote:", banner?.emoji ?? "none")}
		>
			{`Remoteconfig: ${text} - ${emoji}`}
		</Button>
	);
};

export default RemoteComponent;
