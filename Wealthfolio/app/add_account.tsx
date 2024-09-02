import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;

export default function AccountDetailsPage() {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [branchName, setBranchName] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="chevron-left" size={scaleSize(20)} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Enter Account Details</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    placeholderTextColor="#999"
                    value={accountHolderName}
                    onChangeText={setAccountHolderName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Account Number"
                    placeholderTextColor="#999"
                    value={accountNumber}
                    onChangeText={setAccountNumber}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Re-Enter Account Number"
                    placeholderTextColor="#999"
                    value={confirmAccountNumber}
                    onChangeText={setConfirmAccountNumber}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter IFSC Code"
                    placeholderTextColor="#999"
                    value={ifscCode}
                    onChangeText={setIfscCode}
                />
                <TextInput
                    style={[styles.input, styles.disabledInput]}
                    placeholder="Branch Name"
                    placeholderTextColor="#999"
                    value={branchName}
                    onChangeText={setBranchName}
                    editable={false} // Disabled input field for Branch Name
                />
            </View>

            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
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
    formContainer: {
        backgroundColor: '#C2F0C2', // Slightly darker green for the form background
        borderRadius: scaleSize(10),
        padding: scaleSize(15),
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: scaleSize(10),
        paddingHorizontal: scaleSize(15),
        paddingVertical: scaleSize(10),
        marginBottom: scaleSize(15),
        fontSize: scaleSize(16),
        color: '#000',
    },
    disabledInput: {
        backgroundColor: '#E0E0E0', // Light gray background for disabled input
    },
    confirmButton: {
        backgroundColor: '#1E5D89', // Darker blue for the confirm button
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(15),
        alignItems: 'center',
        marginTop: scaleSize(20),
    },
    confirmButtonText: {
        fontSize: scaleSize(18),
        color: '#FFF',
        fontWeight: 'bold',
    },
});
