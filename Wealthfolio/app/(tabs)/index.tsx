import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'

const Page = () => {
  const headerHeight = useHeaderHeight()
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: 'Welcome Back👋',
          headerTitleStyle: { color: Colors.Black },

          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={require('@/assets/images/favicon.png')}
                style={{ width: 40, height: 40, borderRadius: 30 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginRight: 20,
                  borderColor: '#D0D0D0',
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 5,
                }}
              >
                <Ionicons name="cloud-outline" size={20} color={Colors.Black} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginRight: 20,
                  borderColor: '#D0D0D0',
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="notifications-outline"
                  size={28}
                  color={Colors.Black}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text>Hello World</Text>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
})
