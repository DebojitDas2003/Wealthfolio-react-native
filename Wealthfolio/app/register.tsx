import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import { useRouter } from 'expo-router'
import { RFPercentage } from 'react-native-responsive-fontsize'

const { width, height } = Dimensions.get('window')

// Scale factors based on screen size
const scaleWidth = width / 375 // Assuming a base width of 375 (e.g., iPhone 11)
const scaleHeight = height / 812 // Assuming a base height of 812 (e.g., iPhone 11)

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
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.nameInput}>
        <TextInput
          style={styles.inputName}
          placeholder="First Name"
          value={first_name}
          onChangeText={setFirstName}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.inputName}
          placeholder="Last Name"
          value={last_name}
          onChangeText={setLastName}
          autoCapitalize="none"
        />
      </View>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="small" style={{ margin: scaleHeight * 28 }} />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account?</Text>
            <Text
              style={styles.signInLink}
              onPress={() => router.push('/login')}
            >
              Log in
            </Text>
          </View>
        </>
      )}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05, // 5% of the screen width
    justifyContent: 'center',
    backgroundColor: '#D1FFD6',
    paddingTop: scaleHeight * 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: RFPercentage(4), // Responsive font size
    color: '#2b822b',
    marginBottom: scaleHeight * 30,
    textAlign: 'left',
  },
  input: {
    marginBottom: scaleHeight * 10,
    height: scaleHeight * 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: scaleHeight * 10,
    paddingHorizontal: scaleWidth * 15,
    backgroundColor: '#fff',
    fontSize: RFPercentage(2), // Responsive font size
  },
  nameInput: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  inputName: {
    marginBottom: scaleHeight * 10,
    height: scaleHeight * 50,
    width: width * 0.44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: scaleHeight * 10,
    paddingHorizontal: scaleWidth * 15,
    backgroundColor: '#fff',
    fontSize: RFPercentage(2), // Responsive font size
  },
  button: {
    backgroundColor: '#1E1F4B',
    marginTop: scaleHeight * 30,
    borderRadius: scaleHeight * 18,
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleHeight * 45,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFPercentage(2.5), // Responsive font size
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaleHeight * 20,
  },
  signInText: {
    fontSize: RFPercentage(2), // Responsive font size
    color: '#888',
  },
  signInLink: {
    fontSize: RFPercentage(2), // Responsive font size
    color: '#1E1F4B',
    fontWeight: 'bold',
    marginLeft: scaleWidth * 5,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginTop: scaleHeight * 10,
    textAlign: 'center',
    fontSize: RFPercentage(2), // Responsive font size
  },
})
