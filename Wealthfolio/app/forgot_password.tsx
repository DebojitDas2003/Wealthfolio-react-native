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

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePasswordReset = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/auth_redirect/forgot_password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Email: email }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage('Password reset instructions sent to your email.');
      } else {
        setError(`Password reset failed: ${result.message}`);
      }
    } catch (err) {
      setError('Password reset failed: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      {loading ? (
        <ActivityIndicator size="small" style={{ margin: scaleHeight * 28 }} />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
            <Text style={styles.buttonText}>Send Reset Instructions</Text>
          </TouchableOpacity>

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Remember your password?</Text>
            <Text
              style={styles.signInLink}
              onPress={() => router.push('/login')}
            >
              Sign in
            </Text>
          </View>
        </>
      )}

      {message ? <Text style={styles.successText}>{message}</Text> : null}
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
  successText: {
    color: 'green',
    marginTop: scaleHeight * 10,
    textAlign: 'center',
    fontSize: RFPercentage(2), // Responsive font size
  },
});
