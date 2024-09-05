import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function RewardsPage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Rewards</Text>
            </View>

            {/* Rewards Icons Section */}
            <View style={styles.iconSection}>
                <Image source={require('../assets/sammy-line-no-connection.gif')} style={styles.rewardIcon} />
                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.iconCard}>
                        <FontAwesome name="tasks" size={scaleSize(30)} color="#fff" />
                        <Text style={styles.iconText}>Tasks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCard}>
                        <Text style={styles.iconValue}>6553</Text>
                        <Text style={styles.iconText}>Total Points</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCard} onPress={() => router.push('/referral')}>
                        <FontAwesome name="link" size={scaleSize(30)} color="#fff" />
                        <Text style={styles.iconText}>Refer and Earn</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Rewards Earned Section */}
            <View style={styles.rewardsSection}>
                <Text style={styles.sectionTitle}>Rewards Earned</Text>
                <View style={styles.rewardItem}>
                    <FontAwesome name="trophy" size={scaleSize(25)} color="#F5B942" />
                    <Text style={styles.rewardText}>Free days of premium</Text>
                    <Text style={styles.rewardValue}>28</Text>
                </View>
                <View style={styles.rewardItem}>
                    <Text style={styles.rewardText}>Referral</Text>
                    <Text style={styles.rewardValue}>14</Text>
                </View>
                <View style={styles.rewardItem}>
                    <Text style={styles.rewardText}>Point</Text>
                    <Text style={styles.rewardValue}>7</Text>
                </View>
            </View>

            {/* Redeem Points Section */}
            <View style={styles.redeemSection}>
                <Text style={styles.sectionTitle}>Redeem Points</Text>
                {/* Add components to display redeem options here */}
            </View>
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
    iconSection: {
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    rewardIcon: {
        width: scaleSize(80),
        height: scaleSize(80),
        marginBottom: scaleSize(20),
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    iconCard: {
        backgroundColor: '#204A69',
        borderRadius: scaleSize(10),
        padding: scaleSize(10),
        alignItems: 'center',
        justifyContent: 'center',
        width: scaleSize(100),
        height: scaleSize(100),
    },
    iconText: {
        color: '#fff',
        fontSize: scaleFont(2),
        marginTop: scaleSize(5),
    },
    iconValue: {
        color: '#fff',
        fontSize: scaleFont(2.5),
        fontWeight: '700',
    },
    rewardsSection: {
        backgroundColor: '#E0FFEE',
        borderRadius: scaleSize(10),
        padding: scaleSize(20),
        marginBottom: scaleSize(20),
    },
    sectionTitle: {
        fontSize: scaleFont(2.3),
        fontWeight: '600',
        color: '#333',
        marginBottom: scaleSize(10),
    },
    rewardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleSize(10),
    },
    rewardText: {
        fontSize: scaleFont(2.2),
        color: '#333',
    },
    rewardValue: {
        fontSize: scaleFont(2.2),
        fontWeight: '700',
        color: '#333',
    },
    redeemSection: {
        backgroundColor: '#E0FFEE',
        borderRadius: scaleSize(10),
        padding: scaleSize(20),
        marginTop: scaleSize(10),
    },
});
