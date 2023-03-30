import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MusicPlayer() {
  return (
    <View style={styles.container}>
      <Text>MusicPlayer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        alignItems: 'center',
        justifyContent: 'center',
    }
})