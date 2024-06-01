import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AppNavigation from './src/navigation/AppNavigation';
import Details from './src/normal/Details';


export default function App() {
  return (
    // <AppNavigation/>
    <Details/>
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
