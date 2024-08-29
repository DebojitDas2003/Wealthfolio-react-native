import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
const scale = width / 375; // Base width for scaling

const scaleSize = (size: number): number => size * scale
const scaleFont = (size: number): number => RFPercentage(size)

export default function WelcomePage() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Wealthfolio</Text>
      </View>

      <View style={styles.content}>
        <Image 
          source={require('../assets/sammy-line-no-connection.gif')} 
          style={styles.gif} 
          resizeMode="contain"
        />
        <Text style={styles.welcomeMessage}>Your Personal Finance Manager</Text>
        <Text style={styles.description}>
          Manage your finances, track your expenses, and set your goals with ease. 
          Explore the app and get started on your journey to better financial management.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/register')}>
          <FontAwesome name="rocket" size={scaleSize(24)} color="#fff" />
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
          <FontAwesome name="rocket" size={scaleSize(24)} color="#fff" />
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1FFD6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleSize(20),
  },
  header: {
    alignItems: 'center',
    marginBottom: scaleSize(30),
  },
  headerText: {
    fontSize: scaleFont(4),
    fontWeight: 'bold',
    color: '#2b822b',
    textAlign: 'center',
    marginBottom: scaleSize(30),
    textShadowColor: '#9ED9A2',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F7E7',
    padding: scaleSize(20),
    borderRadius: scaleSize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  gif: {
    width: scaleSize(250),
    height: scaleSize(250),
    marginBottom: scaleSize(20),
    borderRadius: scaleSize(10),
    overflow: 'hidden',
  },
  welcomeMessage: {
    fontSize: scaleFont(2.7),
    fontWeight: '700',
    color: '#2b822b',
    marginBottom: scaleSize(20),
  },
  description: {
    fontSize: scaleFont(2),
    color: '#444',
    textAlign: 'center',
    marginBottom: scaleSize(25),
    lineHeight: scaleFont(2.4),
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#2b822b',
    paddingHorizontal: scaleSize(30),
    paddingVertical: scaleSize(14),
    borderRadius: scaleSize(12),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scaleFont(1.8),
    color: '#fff',
    marginLeft: scaleSize(10),
    fontWeight: '600',
  },
});
