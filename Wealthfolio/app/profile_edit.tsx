import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image ,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function ProfileEditPage() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Profile Page edit</Text>
            </View>

            {/* Profile Picture Section */}
            <View style={styles.profilePictureSection}>
                <TouchableOpacity style={styles.profilePictureContainer}>
                    <Image
                        source={{
                            uri: 'https://example.com/your-profile-image.jpg', // Replace with actual profile picture URL
                        }}
                        style={styles.profilePicture}
                    />
                    <FontAwesome name="camera" size={scaleSize(20)} color="#666" style={styles.cameraIcon} />
                </TouchableOpacity>
                <Text style={styles.userName}>User-data</Text>
                <Text style={styles.userEmail}>user@gmail.com</Text>
            </View>

            {/* Edit Form */}
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.editForm}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email address"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Occupation"
                    placeholderTextColor="#999"
                />
            </View>

            {/* Update Button */}
            <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateButtonText}>Update Profile</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1FFD6',
        paddingHorizontal: scaleSize(20),
        paddingTop: scaleSize(30),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    backButton: {
        marginRight: scaleSize(10),
    },
    title: {
        fontSize: scaleFont(2.5),
        fontWeight: '600',
        color: '#333',
    },
    profilePictureSection: {
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    profilePictureContainer: {
        position: 'relative',
    },
    profilePicture: {
        width: scaleSize(100),
        height: scaleSize(100),
        borderRadius: scaleSize(50),
        backgroundColor: '#E5E5E5',
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: scaleSize(5),
        borderRadius: scaleSize(15),
    },
    userName: {
        marginTop: scaleSize(10),
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        color: '#333',
    },
    userEmail: {
        fontSize: scaleFont(1.8),
        color: '#666',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    editForm: {
        marginBottom: scaleSize(20),
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: scaleSize(10),
        padding: scaleSize(10),
        fontSize: scaleFont(1.8),
        color: '#333',
        marginBottom: scaleSize(15),
    },
    updateButton: {
        backgroundColor: '#2b822b',
        borderRadius: scaleSize(15),
        paddingVertical: scaleSize(15),
        alignItems: 'center',
        marginBottom: scaleSize(30),
    },
    updateButtonText: {
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#fff',
    },
});
