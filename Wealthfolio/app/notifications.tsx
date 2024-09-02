import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;

export default function NotificationsPage() {
    const notifications = [
        {
            title: 'Electricity Bill',
            details: 'Electricity Bill of $500 pending on 22/07.',
        },
        {
            title: 'Prepaid Mobile',
            details: 'Your Jio-prepaid recharge has expired.',
        },
        {
            title: 'AI Suggestions',
            details: 'Tap here to check how to lower your monthly expenses.',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="chevron-left" size={scaleSize(20)} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>

            <View style={styles.notificationsContainer}>
                {notifications.map((notification, index) => (
                    <View key={index} style={styles.notificationItem}>
                        <Text style={styles.notificationTitle}>{notification.title}</Text>
                        <Text style={styles.notificationDetails}>{notification.details}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6FFE6', // Light green background
        padding: scaleSize(20),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    headerTitle: {
        fontSize: scaleSize(18),
        fontWeight: 'bold',
        color: '#000',
        marginLeft: scaleSize(10),
    },
    notificationsContainer: {
        backgroundColor: '#C2F0C2', // Slightly darker green for the notification background
        borderRadius: scaleSize(10),
        padding: scaleSize(15),
    },
    notificationItem: {
        marginBottom: scaleSize(15),
    },
    notificationTitle: {
        fontSize: scaleSize(16),
        fontWeight: 'bold',
        color: '#000',
    },
    notificationDetails: {
        fontSize: scaleSize(14),
        color: '#4A4A4A',
    },
});
