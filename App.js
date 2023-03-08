import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';
import { CurrentPrice } from './src/components/CurrentPrice/index.js'
import { HistoryChart } from './src/components/HistoryChart/index.js';
import { QuotationList } from './src/components/QuotationList/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='#f50d41' />
      <CurrentPrice />
      <HistoryChart />
      <QuotationList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 60 : 0,
  },
});
