import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function DebtsAndLoansPage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Finanacial Goals</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Image
                    source={require('../assets/sammy-line-no-connection.gif')} // replace with your image path
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.loansTitle}>Your Goals</Text>
                <TouchableOpacity style={styles.trackButton}>
                    <Text style={styles.trackButtonText}>Add a goal NOW</Text>
                </TouchableOpacity>
            </View>

            {/* Add Button */}
            <TouchableOpacity style={styles.addButton}>
                <FontAwesome name="plus" size={scaleSize(25)} color="#fff" />
            </TouchableOpacity>
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: scaleSize(150),
        height: scaleSize(150),
        marginBottom: scaleSize(20),
    },
    loansTitle: {
        fontSize: scaleFont(2.5),
        fontWeight: '600',
        color: '#333',
        marginBottom: scaleSize(10),
    },
    trackButton: {
        backgroundColor: '#4CAF50',
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(15),
        paddingHorizontal: scaleSize(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    trackButtonText: {
        color: '#fff',
        fontSize: scaleFont(2.3),
        fontWeight: '600',
    },
    addButton: {
        position: 'absolute',
        bottom: scaleSize(20),
        right: scaleSize(20),
        backgroundColor: '#4CAF50',
        borderRadius: scaleSize(25),
        width: scaleSize(50),
        height: scaleSize(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
