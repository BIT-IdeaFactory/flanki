import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MapView } from 'expo'
import CurrentGameModal from './components/CurrentGameModal'

class App extends React.Component {
  render() {
    return (
      <Navigation />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
