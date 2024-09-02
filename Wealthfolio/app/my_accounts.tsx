import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;

export default function YourAccountsPage() {
    const [showBalance, setShowBalance] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="chevron-left" size={scaleSize(20)} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Your Accounts</Text>
            </View>

            <View style={styles.accountCard}>
                <View style={styles.accountDetails}>
                    <Text style={styles.label}>Account Number</Text>
                    <Text style={styles.accountNumber}>************ 5372</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="content-copy" size={scaleSize(18)} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.accountDetails}>
                    <Text style={styles.label}>IFSC Code</Text>
                    <Text style={styles.ifscCode}>BKID000****</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="content-copy" size={scaleSize(18)} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.accountDetails}>
                    <Text style={styles.label}>Account balance</Text>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balance}>{showBalance ? '$ 12.395' : '*****'}</Text>
                        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                            <FontAwesome name={showBalance ? "eye-slash" : "eye"} size={scaleSize(18)} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.accountCard}>
                <View style={styles.accountDetails}>
                    <Text style={styles.label}>Account Number</Text>
                    <Text style={styles.accountNumber}>************ 5372</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="content-copy" size={scaleSize(18)} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.accountDetails}>
                    <Text style={styles.label}>IFSC Code</Text>
                    <Text style={styles.ifscCode}>BKID000****</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="content-copy" size={scaleSize(18)} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.accountDetails}>
                    <Text style={styles.label}>Account balance</Text>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balance}>{showBalance ? '$ 12.395' : '*****'}</Text>
                        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                            <FontAwesome name={showBalance ? "eye-slash" : "eye"} size={scaleSize(18)} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.addAccountButton}>
                <FontAwesome name="bank" size={scaleSize(20)} color="#1E5D89" />
                <Text style={styles.addAccountText}>Add bank account</Text>
            </TouchableOpacity>
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
    accountCard: {
        backgroundColor: '#C2F0C2', // Slightly darker green for the account card background
        borderRadius: scaleSize(10),
        padding: scaleSize(15),
        marginBottom: scaleSize(15),
    },
    accountDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scaleSize(10),
    },
    label: {
        fontSize: scaleSize(14),
        color: '#000',
        fontWeight: 'bold',
    },
    accountNumber: {
        fontSize: scaleSize(14),
        color: '#000',
        flex: 1,
        textAlign: 'right',
        marginRight: scaleSize(10),
    },
    ifscCode: {
        fontSize: scaleSize(14),
        color: '#000',
        flex: 1,
        textAlign: 'right',
        marginRight: scaleSize(10),
    },
    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    balance: {
        fontSize: scaleSize(20),
        color: '#000',
        fontWeight: 'bold',
        marginRight: scaleSize(10),
    },
    addAccountButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(20),
    },
    addAccountText: {
        fontSize: scaleSize(16),
        color: '#1E5D89',
        marginLeft: scaleSize(10),
    },
});
