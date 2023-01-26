import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Login</Text>
      <Button title='Iniciar Sesión' onPress={() => navigation.push('Home')} />
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})