// home.tsx
import { Text, View, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter()

  const logout = () => {
    // Handle logout here, e.g., clear tokens
    router.push('/login')
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Page</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
