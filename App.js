import { ThemeProvider } from 'react-native-rapi-ui';
import Navigation from './src/Routes/StackConfig';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
