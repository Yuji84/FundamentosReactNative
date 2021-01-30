import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import First from './components/FirstComponent'
import ComponentExportDefault from './components/MultiExport'
import ComponentExport1 from './components/MultiExport'
import ComponentExport2 from './components/MultiExport'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ComponentExportDefault/>
      <ComponentExport1/>
      <ComponentExport2/>
      <First/>
    </SafeAreaView>
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
