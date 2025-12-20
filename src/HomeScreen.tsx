import { useFlag } from '@unleash/proxy-client-react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export const HomeScreen = () => {
  const isFFKilling = !useFlag('button_status');

  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me
      </Button>
      <Button
        disabled={isFFKilling}
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        FF Killing
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
});
