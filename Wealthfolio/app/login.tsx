import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { RFPercentage } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');

// Scale factors based on screen size
const scaleWidth = width / 375; // Assuming a base width of 375 (e.g., iPhone 11)
const scaleHeight = height / 812; // Assuming a base height of 812 (e.g., iPhone 11)

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/auth_redirect/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          PasswordHash: password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/home');
      } else {
        setError(`Sign in failed: ${result.message}`);
      }
    } catch (err) {
      setError('Sign in failed: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="small" style={{ margin: scaleHeight * 28 }} />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don’t have an account?</Text>
            <Text
              style={styles.signUpLink}
              onPress={() => router.push('/register')}
            >
              Sign up
            </Text>
          </View>
        </>
      )}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
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
  inputContainer: {
    marginBottom: scaleHeight * 15,
  },
  input: {
    height: scaleHeight * 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: scaleHeight * 10,
    paddingHorizontal: scaleWidth * 15,
    backgroundColor: '#fff',
    fontSize: RFPercentage(2), // Responsive font size
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: scaleHeight * 30,
  },
  forgotPasswordText: {
    color: '#888',
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
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaleHeight * 20,
  },
  signUpText: {
    fontSize: RFPercentage(2), // Responsive font size
    color: '#888',
  },
  signUpLink: {
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
});
