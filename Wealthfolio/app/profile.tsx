import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function ProfilePage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image
                        source={{
                            uri: 'https://example.com/your-profile-image.jpg',
                        }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.title}>My Profile</Text>
                </View>
            </View>

            <ScrollView style={styles.profileContainer} showsVerticalScrollIndicator={false}>
                {/* User Info Section */}
                <View style={styles.userDetailsSection}>
                    <Text style={styles.userName}>John Doe</Text>
                    <Text style={styles.userEmail}>john.doe@example.com</Text>
                </View>

                {/* Account Information */}
                <View style={styles.accountInfoSection}>
                    <Text style={styles.sectionTitle}>Account Information</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Membership:</Text>
                        <Text style={styles.infoValue}>Premium</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Joined:</Text>
                        <Text style={styles.infoValue}>January 1, 2023</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Last Active:</Text>
                        <Text style={styles.infoValue}>August 29, 2024</Text>
                    </View>
                </View>

                {/* Settings Section */}
                <View style={styles.settingsSection}>
                    <Text style={styles.sectionTitle}>Settings</Text>
                    <TouchableOpacity style={styles.settingsRow}>
                        <FontAwesome name="bell" size={scaleSize(20)} color="#333" />
                        <Text style={styles.settingsLabel}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsRow}>
                        <FontAwesome name="lock" size={scaleSize(20)} color="#333" />
                        <Text style={styles.settingsLabel}>Privacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsRow}>
                        <FontAwesome name="cog" size={scaleSize(20)} color="#333" />
                        <Text style={styles.settingsLabel}>Account Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsRow}>
                        <FontAwesome name="question-circle" size={scaleSize(20)} color="#333" />
                        <Text style={styles.settingsLabel}>Help & Support</Text>
                    </TouchableOpacity>
                </View>

                {/* Log Out Button */}
                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Navigation */}
            <View style={styles.navigation}>
                <TouchableOpacity onPress={() => router.push('/home')}>
                    <FontAwesome name="home" size={scaleSize(24)} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="history" size={scaleSize(24)} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerButton}>
                    <FontAwesome name="comment" size={scaleSize(24)} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/stats')}>
                    <FontAwesome name="pie-chart" size={scaleSize(24)} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="user" size={scaleSize(24)} color="#2b822b" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1FFD6',
        paddingHorizontal: scaleSize(20),
        paddingTop: scaleSize(10),
        paddingBottom: scaleSize(70),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleSize(10),
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(18),
        elevation: 3,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: scaleSize(50),
        height: scaleSize(50),
        borderRadius: scaleSize(25),
        marginRight: scaleSize(10),
    },
    title: {
        width: scaleSize(220),
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },
    profileContainer: {
        flex: 1,
    },
    userDetailsSection: {
        alignItems: 'center',
        marginBottom: scaleSize(20),
        backgroundColor: '#E5F9E7',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        elevation: 3,
    },
    userName: {
        fontSize: scaleFont(2.5),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: scaleSize(5),
    },
    userEmail: {
        fontSize: scaleFont(1.8),
        color: '#666',
    },
    accountInfoSection: {
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        marginBottom: scaleSize(20),
    },
    sectionTitle: {
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        color: '#2b822b',
        marginBottom: scaleSize(10),
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaleSize(10),
    },
    infoLabel: {
        fontSize: scaleFont(1.8),
        color: '#333',
    },
    infoValue: {
        fontSize: scaleFont(1.8),
        fontWeight: '600',
        color: '#2b822b',
    },
    settingsSection: {
        backgroundColor: '#D1FFD6',
        borderRadius: scaleSize(15),
        paddingVertical: scaleSize(15),
        paddingHorizontal: scaleSize(5),
        marginBottom: scaleSize(20),
    },
    settingsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(10),
        marginBottom: scaleSize(10),
        backgroundColor: '#E5F9E7',
        borderRadius: scaleSize(10),
        elevation: 3,
    },
    settingsLabel: {
        marginLeft: scaleSize(10),
        fontSize: scaleFont(1.8),
        color: '#333',
    },
    logoutButton: {
        backgroundColor: '#FF5252',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        alignItems: 'center',
        marginBottom: scaleSize(20),
        elevation: 3,
    },
    logoutButtonText: {
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#fff',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scaleSize(20),
        paddingVertical: scaleSize(15),
        backgroundColor: '#fff',
        borderRadius: scaleSize(20),
        position: 'absolute',
        bottom: scaleSize(20),
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    centerButton: {
        backgroundColor: '#2b822b',
        width: scaleSize(50),
        height: scaleSize(50),
        borderRadius: scaleSize(25),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -scaleSize(25),
    },
});
