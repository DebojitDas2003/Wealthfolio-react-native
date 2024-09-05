import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Slider from '@react-native-community/slider';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function EMICalculatorPage() {
    const router = useRouter();

    const [loanAmount, setLoanAmount] = useState(2600000);
    const [interestRate, setInterestRate] = useState(7.5);
    const [loanTenure, setLoanTenure] = useState(10);

    // Function to calculate EMI
    const calculateEMI = (P, r, n) => {
        const monthlyRate = r / 12 / 100;
        const numerator = P * monthlyRate * Math.pow(1 + monthlyRate, n);
        const denominator = Math.pow(1 + monthlyRate, n) - 1;
        return numerator / denominator;
    };

    // Handle EMI Calculation
    const handleCalculateEMI = () => {
        const n = loanTenure * 12; // Convert tenure to months
        const emi = calculateEMI(loanAmount, interestRate, n);

        const totalPayment = emi * n;
        const totalInterest = totalPayment - loanAmount;

        // Navigate to EMI result page
        router.push({
            pathname: '/emi-result', // Ensure you have a route set up for this
            params: {
                emi,
                totalInterest,
                totalPayment,
                principal: loanAmount,
            }
        });
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>EMI Calculator</Text>
            </View>

            {/* Loan Amount */}
            <View style={styles.inputSection}>
                <Text style={styles.label}>Loan Amount</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={loanAmount.toString()}
                        keyboardType="numeric"
                        onChangeText={value => setLoanAmount(Number(value))}
                    />
                    <Text style={styles.currency}>₹</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={20000000}
                    step={50000}
                    value={loanAmount}
                    onValueChange={value => setLoanAmount(Math.floor(value))}
                    minimumTrackTintColor="#F5B942"
                    maximumTrackTintColor="#ddd"
                    thumbTintColor="#F5B942"
                />
                <View style={styles.sliderLabels}>
                    <Text style={styles.sliderLabel}>0L</Text>
                    <Text style={styles.sliderLabel}>50L</Text>
                    <Text style={styles.sliderLabel}>100L</Text>
                    <Text style={styles.sliderLabel}>150L</Text>
                    <Text style={styles.sliderLabel}>200L</Text>
                </View>
            </View>

            {/* Interest Rate */}
            <View style={styles.inputSection}>
                <Text style={styles.label}>Interest Rate</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={interestRate.toString()}
                        keyboardType="numeric"
                        onChangeText={value => setInterestRate(Number(value))}
                    />
                    <Text style={styles.currency}>%</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={5}
                    maximumValue={15}
                    step={0.1}
                    value={interestRate}
                    onValueChange={value => setInterestRate(parseFloat(value.toFixed(1)))}
                    minimumTrackTintColor="#F5B942"
                    maximumTrackTintColor="#ddd"
                    thumbTintColor="#F5B942"
                />
                <View style={styles.sliderLabels}>
                    <Text style={styles.sliderLabel}>5</Text>
                    <Text style={styles.sliderLabel}>7.5</Text>
                    <Text style={styles.sliderLabel}>10</Text>
                    <Text style={styles.sliderLabel}>12.5</Text>
                    <Text style={styles.sliderLabel}>15</Text>
                </View>
            </View>

            {/* Loan Tenure */}
            <View style={styles.inputSection}>
                <Text style={styles.label}>Loan Tenure</Text>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={loanTenure.toString()}
                        keyboardType="numeric"
                        onChangeText={value => setLoanTenure(Number(value))}
                    />
                    <View style={styles.tenureOptions}>
                        <Text style={styles.tenureText}>YR</Text>
                        <Text style={styles.tenureText}>MO</Text>
                    </View>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={20}
                    step={1}
                    value={loanTenure}
                    onValueChange={value => setLoanTenure(Math.floor(value))}
                    minimumTrackTintColor="#F5B942"
                    maximumTrackTintColor="#ddd"
                    thumbTintColor="#F5B942"
                />
                <View style={styles.sliderLabels}>
                    <Text style={styles.sliderLabel}>0</Text>
                    <Text style={styles.sliderLabel}>5</Text>
                    <Text style={styles.sliderLabel}>10</Text>
                    <Text style={styles.sliderLabel}>15</Text>
                    <Text style={styles.sliderLabel}>20</Text>
                </View>
            </View>

            {/* Calculate EMI Button */}
            <TouchableOpacity style={styles.calculateButton} onPress={handleCalculateEMI}>
                <Text style={styles.calculateButtonText}>Calculate EMI</Text>
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
    inputSection: {
        marginBottom: scaleSize(20),
    },
    label: {
        fontSize: scaleFont(2.3),
        fontWeight: '600',
        color: '#333',
        marginBottom: scaleSize(10),
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(10),
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: scaleSize(8),
        padding: scaleSize(10),
        fontSize: scaleFont(2.2),
        color: '#333',
        textAlign: 'left',
    },
    currency: {
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        color: '#333',
        marginLeft: scaleSize(5),
    },
    slider: {
        width: '100%',
        height: scaleSize(40),
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scaleSize(10),
        marginTop: scaleSize(-10),
    },
    sliderLabel: {
        fontSize: scaleFont(1.8),
        color: '#666',
    },
    tenureOptions: {
        flexDirection: 'row',
        marginLeft: scaleSize(5),
    },
    tenureText: {
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#666',
        marginLeft: scaleSize(10),
    },
    calculateButton: {
        backgroundColor: '#1a1a2e',
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(15),
        alignItems: 'center',
        marginTop: scaleSize(30),
    },
    calculateButtonText: {
        fontSize: scaleFont(2.5),
        fontWeight: '600',
        color: '#fff',
    },
});
