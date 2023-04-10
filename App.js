import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Loading } from './src/components';

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if(!fontsLoader) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" translucent />
    </>
  );
};