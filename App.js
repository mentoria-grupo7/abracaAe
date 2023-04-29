import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Partners } from './src/screens/Partners';
import { styles } from './src/screens/Partners/style';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Partners />
    </SafeAreaView>
  );
}
