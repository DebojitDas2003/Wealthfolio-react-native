import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function DebtsAndLoansPage() {
    const [loans, setLoans] = useState([]); // State to track added loans
    const router = useRouter();

    const handleAddLoan = () => {
        // Simulate adding a loan (replace with actual functionality)
        setLoans([...loans, { id: loans.length + 1, amountPaid: 7000, totalAmount: 8000 }]);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            {/* Conditional Rendering */}
            {loans.length === 0 ? (
                // Layout for no debts
                <View style={styles.content}>
                    <Image
                        source={require('../assets/sammy-line-no-connection.gif')} // replace with your image path
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.loansTitle}>Your Loans</Text>
                    <TouchableOpacity style={styles.trackButton}>
                        <Text style={styles.trackButtonText}>Track your LOANS</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                // Layout for debts added
                <View style={styles.debtsContainer}>
                    <View style={styles.totalDebts}>
                        <Text style={styles.totalDebtsText}>Your total debts</Text>
                        {/* Placeholder for your debt chart */}
                        <View style={styles.debtChart}></View>
                    </View>
                    <View style={styles.loansList}>
                        {loans.map((loan, index) => (
                            <View key={index} style={styles.loanCard}>
                                <Text style={styles.loanTitle}>Home loan</Text>
                                <View style={styles.progressContainer}>
                                    {/* Placeholder for progress circle */}
                                    <View style={styles.progressCircle}>
                                        <Text style={styles.progressText}>
                                            {((loan.amountPaid / loan.totalAmount) * 100).toFixed(1)}%
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.loanActions}>
                                    <TouchableOpacity style={styles.editButton}>
                                        <Text style={styles.actionText}>Edit details</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.deleteButton}>
                                        <Text style={styles.actionText}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                        {/* Add another loan */}
                        <TouchableOpacity style={styles.addLoanButton} onPress={handleAddLoan}>
                            <FontAwesome name="plus" size={scaleSize(25)} color="#4CAF50" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Add Button (for the "no debts" page) */}
            {loans.length === 0 && (
                <TouchableOpacity style={styles.addButton} onPress={handleAddLoan}>
                    <FontAwesome name="plus" size={scaleSize(25)} color="#fff" />
                </TouchableOpacity>
            )}
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
    scrollContainer: {
        flexGrow: 1,
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
    debtsContainer: {
        flex: 1,
    },
    totalDebts: {
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    totalDebtsText: {
        fontSize: scaleFont(2.5),
        fontWeight: '600',
        color: '#333',
    },
    debtChart: {
        width: scaleSize(150),
        height: scaleSize(150),
        backgroundColor: '#4CAF50',
        borderRadius: scaleSize(75),
        marginTop: scaleSize(10),
    },
    loansList: {
        flex: 1,
    },
    loanCard: {
        backgroundColor: '#E3FFF3',
        borderRadius: scaleSize(10),
        padding: scaleSize(20),
        marginBottom: scaleSize(10),
    },
    loanTitle: {
        fontSize: scaleFont(2.3),
        fontWeight: '600',
        color: '#333',
        marginBottom: scaleSize(10),
    },
    progressContainer: {
        alignItems: 'center',
        marginBottom: scaleSize(10),
    },
    progressCircle: {
        width: scaleSize(100),
        height: scaleSize(100),
        backgroundColor: '#4CAF50',
        borderRadius: scaleSize(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        color: '#fff',
        fontSize: scaleFont(2.5),
        fontWeight: '600',
    },
    loanActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#4CAF50',
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(20),
    },
    deleteButton: {
        backgroundColor: '#E57373',
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(20),
    },
    actionText: {
        color: '#fff',
        fontSize: scaleFont(2.0),
        fontWeight: '600',
    },
    addLoanButton: {
        backgroundColor: '#fff',
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(20),
        paddingHorizontal: scaleSize(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(10),
        marginBottom: scaleSize(20),
    },
});
