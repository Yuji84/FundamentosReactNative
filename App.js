import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import First from './components/FirstComponent'
import QMS, {ComponentExport1, ComponentExport2}from './components/MultiExport'
import MinMax from './components/MinMax'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MinMax max={10} min="2"/>
      <QMS/>
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
