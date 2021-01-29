import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import First from './components/FirstComponent'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
