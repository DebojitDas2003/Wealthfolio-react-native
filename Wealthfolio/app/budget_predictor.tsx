import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function BudgetPredictorPage() {
    const router = useRouter();
    
    // Mock data
    const [thisMonthExpenses, setThisMonthExpenses] = useState({
        groceries: 200,
        diningOut: 150,
        entertainment: 100,
        utilities: 250,
        rent: 1000,
    });

    // Calculate total expenses for this month
    const totalExpenses = Object.values(thisMonthExpenses).reduce((a, b) => a + b, 0);

    // Simple prediction logic (e.g., a 10% increase)
    const predictionMultiplier = 1.1;
    const predictedExpenses = Object.fromEntries(
        Object.entries(thisMonthExpenses).map(([key, value]) => [key, value * predictionMultiplier])
    );
    const predictedTotal = totalExpenses * predictionMultiplier;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/home')}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Budget Predictor</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Expense Summary */}
                <View style={styles.expenseSummarySection}>
                    <Text style={styles.sectionTitle}>This Month's Expenses</Text>
                    {Object.entries(thisMonthExpenses).map(([category, amount]) => (
                        <View key={category} style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{category.charAt(0).toUpperCase() + category.slice(1)}:</Text>
                            <Text style={styles.infoValue}>${amount.toFixed(2)}</Text>
                        </View>
                    ))}
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Total Expenses:</Text>
                        <Text style={styles.infoValue}>${totalExpenses.toFixed(2)}</Text>
                    </View>
                </View>

                {/* Budget Prediction */}
                <View style={styles.predictionSection}>
                    <Text style={styles.sectionTitle}>Next Month's Budget Prediction</Text>
                    {Object.entries(predictedExpenses).map(([category, amount]) => (
                        <View key={category} style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{category.charAt(0).toUpperCase() + category.slice(1)}:</Text>
                            <Text style={styles.infoValue}>${amount.toFixed(2)}</Text>
                        </View>
                    ))}
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Predicted Total:</Text>
                        <Text style={styles.infoValue}>${predictedTotal.toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>
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
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    title: {
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
        flex: 1,
    },
    content: {
        flex: 1,
    },
    expenseSummarySection: {
        backgroundColor: '#E5F9E7',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        marginBottom: scaleSize(20),
        elevation: 3,
    },
    predictionSection: {
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        elevation: 3,
    },
    sectionTitle: {
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        color: '#2b822b',
        marginBottom: scaleSize(10),
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaleSize(10),
    },
    infoLabel: {
        fontSize: scaleFont(1.8),
        color: '#333',
    },
    infoValue: {
        fontSize: scaleFont(1.8),
        fontWeight: '600',
        color: '#2b822b',
    },
});
