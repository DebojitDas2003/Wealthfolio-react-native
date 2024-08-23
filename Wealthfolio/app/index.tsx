import { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native'

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const signUp = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FirstName: 'John', // Replace with actual data
          LastName: 'Doe', // Replace with actual data
          UserName: email, // Assuming UserName is the email
          Email: email,
          PasswordHash: password,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        alert('User account created!')
      } else {
        alert(`Registration failed: ${result.message}`)
      }
    } catch (err) {
      alert('Registration failed: ' + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://your-server-ip:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          PasswordHash: password,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        alert('Welcome back!')
      } else {
        alert(`Sign in failed: ${result.message}`)
      }
    } catch (err) {
      alert('Sign in failed: ' + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator size={'small'} style={{ margin: 28 }} />
        ) : (
          <>
            <Button title="Sign In" onPress={signIn} />
            <Button title="Sign Up" onPress={signUp} />
          </>
        )}

        <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 10,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
})
