import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const Page = () => {
  return (
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
            <Image
              source={require('@/assets/images/favicon.png')}
              style={{ width: 40, height: 40, borderRadius: 30 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: 20,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <Ionicons name="notifications-outline" size={28} color={'#000'} />
          </TouchableOpacity>
        ),
      }}
    />
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
