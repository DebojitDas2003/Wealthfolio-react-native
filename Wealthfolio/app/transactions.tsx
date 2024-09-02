import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function TransactionPage() {
    const router = useRouter()

    const [isBalanceHidden, setIsBalanceHidden] = useState(false)

    const toggleBalanceVisibility = () => {
      setIsBalanceHidden(!isBalanceHidden)
    }

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
                    <Text style={styles.title}>Transactions</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.userText}>Hi User</Text>
                    <Text style={styles.welcomeText}>Welcome back</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceLabel}>Your balance</Text>
                        <View style={styles.balanceInfo}>
                            <Text style={styles.balanceAmount}>
                                {isBalanceHidden ? '$ *****' : '$12,395'}
                            </Text>
                            <TouchableOpacity onPress={toggleBalanceVisibility}>
                                <FontAwesome
                                    name={isBalanceHidden ? 'eye-slash' : 'eye'}
                                    size={scaleSize(16)}
                                    color="#666"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.balanceDetail}>
                            <FontAwesome name="circle" size={scaleSize(14)} color="#1E88E5" />
                            <Text style={styles.detailText}>
                                {isBalanceHidden ? '$ *****' : '$10,000'}
                            </Text>
                            <FontAwesome name="exclamation-triangle" size={scaleSize(14)} color="#FFC107" />
                            <Text style={styles.detailText}>
                                {isBalanceHidden ? '$ *****' : '$2,395'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.expenseContainer}>
                        <Text style={styles.expenseLabel}>Your Expense</Text>
                        <Text style={styles.expenseAmount}>
                            {isBalanceHidden ? '$ *****' : '$2,024'}
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView style={styles.transactionList}>
                <Text style={styles.transactionTitle}>Recent Transactions</Text>

                <View style={styles.transactionCard}>
                    <FontAwesome name="paypal" size={scaleSize(24)} color="#333" />
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionName}>Paypal</Text>
                        <Text style={styles.transactionTime}>Today | 10AM | Deposit</Text>
                    </View>
                    <Text style={styles.transactionAmount}>$1,590</Text>
                </View>
                <View style={styles.transactionCard}>
                    <FontAwesome name="paypal" size={scaleSize(24)} color="#333" />
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionName}>Paypal</Text>
                        <Text style={styles.transactionTime}>Today | 10AM | Deposit</Text>
                    </View>
                    <Text style={styles.transactionAmount}>$1,590</Text>
                </View>
                <View style={styles.transactionCard}>
                    <FontAwesome name="paypal" size={scaleSize(24)} color="#333" />
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionName}>Paypal</Text>
                        <Text style={styles.transactionTime}>Today | 10AM | Deposit</Text>
                    </View>
                    <Text style={styles.transactionAmount}>$1,590</Text>
                </View>
                <View style={styles.transactionCard}>
                    <FontAwesome name="paypal" size={scaleSize(24)} color="#333" />
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionName}>Paypal</Text>
                        <Text style={styles.transactionTime}>Today | 10AM | Deposit</Text>
                    </View>
                    <Text style={styles.transactionAmount}>$1,590</Text>
                </View>
                <View style={styles.transactionCard}>
                    <FontAwesome name="paypal" size={scaleSize(24)} color="#333" />
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionName}>Paypal</Text>
                        <Text style={styles.transactionTime}>Today | 10AM | Deposit</Text>
                    </View>
                    <Text style={styles.transactionAmount}>$1,590</Text>
                </View>

                {/* Repeat the transactionCard for each transaction */}

            </ScrollView>

            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Filter</Text>
            </TouchableOpacity>

            {/* Navigation */}
            <View style={styles.navigation}>
                <TouchableOpacity onPress={() => router.push('/home')}>
                    <FontAwesome name="home" size={scaleSize(24)} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="history" size={scaleSize(24)} color="#2b822b" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerButton} onPress={() => router.push('/chatbot')}>
                    <FontAwesome name="comment" size={scaleSize(24)} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/stats')}>
                    <FontAwesome name="pie-chart" size={scaleSize(24)} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/profile')}>
                    <FontAwesome name="user" size={scaleSize(24)} color="#666" />
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
        marginBottom: scaleSize(20),
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


        card: {
          backgroundColor: '#E5F9E7',
          padding: scaleSize(10),
          borderRadius: scaleSize(15),
          width: '100%',
          marginBottom: scaleSize(10),
        },
        cardHeader: {
          backgroundColor: '#4CAF50',
          borderTopLeftRadius: scaleSize(15),
          borderTopRightRadius: scaleSize(15),
          padding: scaleSize(10),
          paddingBottom: scaleSize(20),
        },
        userText: {
          fontSize: scaleFont(3),
          color: '#fff',
          fontWeight: 'bold',
        },
        welcomeText: {
          fontSize: scaleFont(1.8),
          color: '#fff',
        },
        body: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#C3F9C8',
          paddingVertical: scaleSize(10),
          paddingHorizontal: scaleSize(10),
          borderBottomLeftRadius: scaleSize(15),
          borderBottomRightRadius: scaleSize(15),
          elevation: 2,
        },
        balanceContainer: {
          justifyContent: 'center',
        },
        balanceLabel: {
          fontSize: scaleFont(1.8),
          color: '#666',
          marginBottom: scaleSize(5),
        },
        balanceInfo: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        balanceAmount: {
          fontSize: scaleFont(3),
          fontWeight: 'bold',
          color: '#2b822b',
          marginRight: scaleSize(10),
        },
        balanceDetail: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: scaleSize(5),
        },
        detailText: {
          fontSize: scaleFont(1.6),
          color: '#666',
          marginHorizontal: scaleSize(5),
        },
        expenseContainer: {
          height: scaleSize(100),
          width: scaleSize(100),
          borderRadius: scaleSize(50),
          borderWidth: 3,
          borderColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
        },
        expenseLabel: {
          fontSize: scaleFont(1.5),
          color: '#666',
        },
        expenseAmount: {
          fontSize: scaleFont(2.6),
          fontWeight: 'bold',
          color: '#FF5722',
        },


    transactionList: {
        flex: 1,
    },
    transactionTitle: {
        fontSize: scaleFont(2.2),
        fontWeight: 'bold',
        color: '#2b822b',
        marginBottom: scaleSize(10),
    },
    transactionCard: {
        backgroundColor: '#E5F7E7',
        padding: scaleSize(15),
        borderRadius: scaleSize(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleSize(2.5),
        marginBottom: scaleSize(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    transactionDetails: {
        flex: 1,
        marginLeft: scaleSize(10),
    },
    transactionName: {
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#333',
    },
    transactionTime: {
        fontSize: scaleFont(1.6),
        color: '#666',
    },
    transactionAmount: {
        fontSize: scaleFont(2),
        fontWeight: 'bold',
        color: '#ff5c5c',
    },
    filterButton: {
        backgroundColor: '#2b822b',
        paddingVertical: scaleSize(15),
        borderRadius: scaleSize(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: scaleSize(20),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    filterButtonText: {
        fontSize: scaleFont(2),
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
