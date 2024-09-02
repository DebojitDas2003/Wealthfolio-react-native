import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Destructure props within the component parameter
const CustomSidebar = ({ visible = false, onClose = () => {} }) => {
  // Check if 'visible' prop is false; if so, return null
  if (!visible) return null;

  return (
    <TouchableOpacity style={styles.overlay} onPress={onClose}>
      <View style={styles.sidebar}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://example.com/your-profile-image.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>user@email.com</Text>
        </View>
        <TouchableOpacity style={styles.sidebarItem}>
          <FontAwesome name="home" size={24} color="black" />
          <Text style={styles.sidebarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <FontAwesome name="cogs" size={24} color="black" />
          <Text style={styles.sidebarText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <FontAwesome name="sign-out" size={24} color="black" />
          <Text style={styles.sidebarText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-start',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  sidebarText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CustomSidebar;
