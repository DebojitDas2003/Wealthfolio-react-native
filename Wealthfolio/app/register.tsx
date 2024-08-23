// register.tsx
import { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native'
import { useRouter } from 'expo-router'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const signUp = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/auth_redirect/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            FirstName: 'John',
            LastName: 'Doe',
            UserName: email,
            Email: email,
            PasswordHash: password,
            client_id: '0037a3a1-5ca9-4120-95ad-cfca2736232b',
            client_secret: 'b4285a0e-19cf-40a4-8853-42bd4d50e3d3',
          }),
        }
      )

      const result = await response.json()

      if (response.ok) {
        alert('User account created!')
        router.push('/login')
      } else {
        setError(`Registration failed: ${result.message}`)
      }
    } catch (err) {
      setError('Registration failed: ' + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign Up</Text>
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
        <Button title="Sign Up" onPress={signUp} />
      )}
      <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>
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
