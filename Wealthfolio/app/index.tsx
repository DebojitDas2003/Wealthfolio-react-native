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
import auth from '@react-native-firebase/auth'
import { FirebaseError } from '@firebase/app'

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const signUp = async () => {
    setLoading(true)
    try {
      await auth().createUserWithEmailAndPassword(email, password)
      alert('User account created & signed in!')
    } catch (e: any) {
      const err = e as FirebaseError
      alert('Registration failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async () => {
    setLoading(true)
    try {
      await auth().signInWithEmailAndPassword(email, password)
      alert('Welcome back!')
    } catch (e: any) {
      const err = e as FirebaseError
      alert('Sign in failed: ' + err.message)
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
