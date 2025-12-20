import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { Screen1Screen } from './Screen1';
import { Screen2Screen } from './Screen2';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Screen1" component={Screen1Screen} />
      <Stack.Screen name="Screen2" component={Screen2Screen} />
    </Stack.Navigator>
  );
};
