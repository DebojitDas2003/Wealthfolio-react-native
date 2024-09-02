import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AddCardPage() {
    const [cardType, setCardType] = useState('Master Card');
    const [expiry, setExpiry] = useState('09/26');
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Add New Card</Text>
                </View>

                {/* Card Display */}
                <View style={styles.cardContainer}>
                    <Image
                        source={{ uri: 'https://example.com/card-image.png' }} // Replace with actual card image URL
                        style={styles.cardImage}
                    />
                </View>

                {/* Form Fields */}
                <View style={styles.formContainer}>
                    {/* Card Type Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Card Type</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g., Master Card"
                            value={cardType}
                            onChangeText={setCardType}
                        />
                    </View>

                    {/* Expiry Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Expiry</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g., 09/26"
                            value={expiry}
                            onChangeText={setExpiry}
                        />
                    </View>

                    {/* Cardholder Name Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Cardholder Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Cardholder's Name"
                            value={cardholderName}
                            onChangeText={setCardholderName}
                        />
                    </View>

                    {/* Card Number Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Card Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="5023 **** **** ****"
                            value={cardNumber}
                            onChangeText={setCardNumber}
                        />
                    </View>

                    {/* CVV Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>CVV</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="C50"
                            value={cvv}
                            onChangeText={setCvv}
                        />
                    </View>
                </View>

                {/* Save Button */}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save Card</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#B8FFC8',
        padding: scaleSize(20),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(20),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(15),
        backgroundColor: '#90EE90',
        borderRadius: scaleSize(15),
    },
    headerTitle: {
        fontSize: scaleSize(18),
        fontWeight: 'bold',
        color: '#333',
        marginLeft: scaleSize(10),
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
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: scaleSize(15),
        padding: scaleSize(20),
    },
    inputGroup: {
        marginBottom: scaleSize(20),
    },
    label: {
        fontSize: scaleSize(14),
        color: '#333',
        marginBottom: scaleSize(5),
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: scaleSize(10),
        padding: scaleSize(10),
        fontSize: scaleSize(16),
        color: '#333',
    },
    saveButton: {
        backgroundColor: '#4682B4',
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(15),
        alignItems: 'center',
        marginTop: scaleSize(20),
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaleSize(16),
        fontWeight: 'bold',
    },
});
