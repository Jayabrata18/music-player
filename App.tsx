import { View, Text,StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import MusicPlayer from './screens/MusicPlayer'

const App = () => {
  return (
    <View style={styles.container} >
      <StatusBar barStyle="light-content"/>
      <MusicPlayer/>
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})