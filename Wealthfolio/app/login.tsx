// login.tsx
import React, { useState } from 'react'
import { View, TextInput, Button, Text, Alert } from 'react-native'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'http://your-flask-server-url/auth_redirect/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      )

      const data = await response.json()

      if (response.ok) {
        // Handle successful login, e.g., navigate to home screen
        Alert.alert('Login Successful', data.message)
      } else {
        // Handle errors
        Alert.alert('Login Failed', data.message)
      }
    } catch (error) {
      console.error('Error:', error)
      Alert.alert('Error', 'An error occurred. Please try again.')
    }
  }

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}
