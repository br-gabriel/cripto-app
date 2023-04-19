import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if(!fontsLoader) {
    return (
      <Loading bgColor={'#05043D'} />
    )
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" translucent />
    </>
  );
};