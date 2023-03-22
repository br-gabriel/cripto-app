import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Text } from 'react-native';

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if(!fontsLoader) {
    return (
      <Text>Carregando...</Text>
    )
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" translucent />
    </>
  );
};