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
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const isValidLength = password.length >= 8
    const doesNotContainName =
      !password.toLowerCase().includes(first_name.toLowerCase()) &&
      !password.toLowerCase().includes(last_name.toLowerCase())

    return (
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar &&
      isValidLength &&
      doesNotContainName
    )
  }

  const signUp = async () => {
    setLoading(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      setLoading(false)
      return
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long, include uppercase, lowercase letters, a number, and a special character, and cannot contain your name.'
      )
      setLoading(false)
      return
    }
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/auth_redirect/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            FirstName: first_name,
            LastName: last_name,
            PhoneNumber: phoneNumber,
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
        placeholder="First Name"
        value={first_name}
        onChangeText={setFirstName}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={last_name}
        onChangeText={setLastName}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        autoCapitalize="none"
      />
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
