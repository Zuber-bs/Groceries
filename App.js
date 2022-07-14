import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const AppNavigator = createSwitchNavigator({
  SignUpScreen: SignUpScreen,
  ListScreen: ListScreen
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
