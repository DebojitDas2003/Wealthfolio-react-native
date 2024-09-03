import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function ReferAndEarnPage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
            </View>

            {/* Gift Icon and Offer Section */}
            <View style={styles.offerSection}>
                <Image source={require('../assets/sammy-line-no-connection.gif')} style={styles.giftIcon} />
                <Text style={styles.offerTitle}>1 week of Premium for you and for each of your friends</Text>
                <Text style={styles.offerSubtitle}>Saving money is more fun and effective when you connect with friends</Text>
            </View>

            {/* Referral Code Section */}
            <View style={styles.referralSection}>
                <Text style={styles.referralCodeTitle}>Your Referral Code :</Text>
                <Text style={styles.referralCode}>87394</Text>
                <Text style={styles.shareLinkTitle}>Share your link</Text>
                <View style={styles.linkRow}>
                    <TextInput
                        style={styles.linkInput}
                        value="https://aiwealthmanager.com/invite/87394"
                        editable={false}
                    />
                    <TouchableOpacity style={styles.copyButton}>
                        <FontAwesome name="clipboard" size={scaleSize(20)} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.shareButtonsRow}>
                    <TouchableOpacity style={styles.whatsappButton}>
                        <FontAwesome name="whatsapp" size={scaleSize(20)} color="#fff" />
                        <Text style={styles.whatsappButtonText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sendLinkButton}>
                        <FontAwesome name="send" size={scaleSize(20)} color="#fff" />
                        <Text style={styles.sendLinkButtonText}>Send link</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Friends List Section */}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false} >
            <View style={styles.friendsSection}>
                <Text style={styles.friendsTitle}>Friends</Text>
                <View style={styles.friendItem}>
                    <Image source={require('../assets/sammy-line-no-connection.gif')} style={styles.friendAvatar} />
                    <Text style={styles.friendName}>Username</Text>
                </View>
                <View style={styles.friendItem}>
                    <Image source={require('../assets/sammy-line-no-connection.gif')} style={styles.friendAvatar} />
                    <Text style={styles.friendName}>Username</Text>
                </View>
            </View>
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
    offerSection: {
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    giftIcon: {
        width: scaleSize(80),
        height: scaleSize(80),
        marginBottom: scaleSize(10),
    },
    offerTitle: {
        fontSize: scaleFont(2.5),
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
        marginBottom: scaleSize(10),
    },
    offerSubtitle: {
        fontSize: scaleFont(2),
        color: '#666',
        textAlign: 'center',
    },
    referralSection: {
        backgroundColor: '#E0FFEE',
        borderRadius: scaleSize(10),
        padding: scaleSize(20),
        marginBottom: scaleSize(20),
    },
    referralCodeTitle: {
        fontSize: scaleFont(2.3),
        fontWeight: '600',
        color: '#333',
        marginBottom: scaleSize(5),
        textAlign: 'center',
    },
    referralCode: {
        fontSize: scaleFont(2.8),
        fontWeight: '700',
        color: '#333',
        marginBottom: scaleSize(15),
        textAlign: 'center',
    },
    shareLinkTitle: {
        fontSize: scaleFont(2),
        color: '#666',
        marginBottom: scaleSize(10),
    },
    linkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    linkInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: scaleSize(8),
        padding: scaleSize(10),
        fontSize: scaleFont(2),
        color: '#333',
        backgroundColor: '#fff',
        marginRight: scaleSize(10),
    },
    copyButton: {
        backgroundColor: '#0B4870',
        borderRadius: scaleSize(8),
        padding: scaleSize(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    whatsappButton: {
        backgroundColor: '#25D366',
        borderRadius: scaleSize(8),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    whatsappButtonText: {
        color: '#fff',
        fontSize: scaleFont(2),
        marginLeft: scaleSize(10),
    },
    sendLinkButton: {
        backgroundColor: '#0B4870',
        borderRadius: scaleSize(8),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    sendLinkButtonText: {
        color: '#fff',
        fontSize: scaleFont(2),
        marginLeft: scaleSize(10),
    },
    scrollContainer: {
        flexGrow: 1,
    },
    friendsSection: {
        backgroundColor: '#E0FFEE',
        borderRadius: scaleSize(10),
        padding: scaleSize(20),
    },
    friendsTitle: {
        fontSize: scaleFont(2.3),
        fontWeight: '600',
        color: '#333',
        marginBottom: scaleSize(10),
    },
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(10),
    },
    friendAvatar: {
        width: scaleSize(40),
        height: scaleSize(40),
        borderRadius: scaleSize(20),
        marginRight: scaleSize(10),
    },
    friendName: {
        fontSize: scaleFont(2.2),
        color: '#333',
    },
});
