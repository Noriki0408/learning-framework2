import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text,styles.text1]}>PSYCHO-PASS</Text>
      <Text style={[styles.text,styles.text2]}>犯罪係数Over300</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
       fontSize: 30,
       fontWeight: 'bold',
     },
     text1: {
       color: '#000000',
     },
     text2: {
       color: '#00FFFF',
     },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
