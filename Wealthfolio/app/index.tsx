import { View, Text, Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()

  return (
    <View>
      <Text>Welcome to the App!</Text>
      <Button title="Go to Login" onPress={() => router.push('/login')} />
    </View>
  )
}
