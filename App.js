import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
// import Checkbox from './src/components/Checkbox';


export default function App() {
  return (
    <AppNavigation/>
    // <Checkbox/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
