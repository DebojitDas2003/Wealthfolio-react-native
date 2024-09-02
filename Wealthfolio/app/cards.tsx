import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';

export default function YourCardsPage() {
    const router = useRouter()

    const [activeTab, setActiveTab] = useState('Debit Card');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Your Cards</Text>
            </View>

            {/* Card Type Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Debit Card' && styles.activeTab,
                    ]}
                    onPress={() => setActiveTab('Debit Card')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'Debit Card' && styles.activeTabText,
                        ]}
                    >
                        Debit Card
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Credit Card' && styles.activeTab,
                    ]}
                    onPress={() => setActiveTab('Credit Card')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === 'Credit Card' && styles.activeTabText,
                        ]}
                    >
                        Credit Card
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Card Display */}
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: 'https://example.com/card-image.png' }} // Replace with actual card image URL
                    style={styles.cardImage}
                />
                <Text style={styles.balanceText}>₹1,05,284</Text>
                <Text style={styles.balanceSubText}>
                    {activeTab === 'Debit Card' ? 'Available Balance' : 'Available Limit'}
                </Text>
            </View>

            {/* Add Card Section */}
            <TouchableOpacity style={styles.addCardContainer} onPress={() => router.push('/addCards')}>
                <View style={styles.addCardButton}>
                    <FontAwesome name="plus" size={scaleSize(20)} color="#333" />
                </View>
                <View>
                    <Text style={styles.addCardText}>Add card</Text>
                    <Text style={styles.addCardSubText}>
                        Add your credit / debit card
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1FFD6',
        padding: scaleSize(20),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(20),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(15),
        backgroundColor: '#B8FFC8',
        borderRadius: scaleSize(15),
    },
    headerTitle: {
        fontSize: scaleSize(18),
        fontWeight: 'bold',
        color: '#333',
        marginLeft: scaleSize(10),
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#C0C0C0',
        borderRadius: scaleSize(10),
        marginBottom: scaleSize(20),
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: scaleSize(10),
    },
    activeTab: {
        backgroundColor: '#2b822b',
        borderRadius: scaleSize(10),
    },
    tabText: {
        fontSize: scaleSize(14),
        color: '#333',
    },
    activeTabText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    cardContainer: {
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    cardImage: {
        width: scaleSize(250),
        height: scaleSize(150),
        borderRadius: scaleSize(10),
        marginBottom: scaleSize(10),
    },
    balanceText: {
        fontSize: scaleSize(24),
        fontWeight: 'bold',
        color: '#333',
    },
    balanceSubText: {
        fontSize: scaleSize(14),
        color: '#333',
    },
    addCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#B8FFC8',
        padding: scaleSize(15),
        borderRadius: scaleSize(15),
    },
    addCardButton: {
        backgroundColor: '#90EE90',
        padding: scaleSize(10),
        borderRadius: scaleSize(20),
        marginRight: scaleSize(15),
    },
    addCardText: {
        fontSize: scaleSize(16),
        fontWeight: 'bold',
        color: '#333',
    },
    addCardSubText: {
        fontSize: scaleSize(12),
        color: '#333',
    },
});
