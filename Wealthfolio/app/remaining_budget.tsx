import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const barWidth = width * 0.8; // Example width for the bars

const scaleSize = (size: number): number => size * (width / 375);
const scaleFont = (size: number): number => RFPercentage(size);

export default function RemainingBudgetPage() {
    // Mock data
    const [totalBudget, setTotalBudget] = useState(2000); // Example total budget
    const [expenses, setExpenses] = useState({
        groceries: 200,
        diningOut: 150,
        entertainment: 100,
        utilities: 250,
        rent: 1000,
    });

    // Calculate total expenses
    const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
    const remainingBudget = totalBudget - totalExpenses;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                <Text style={styles.title}>Remaining Budget</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Budget Summary */}
                <View style={styles.budgetSummarySection}>
                    <Text style={styles.sectionTitle}>Total Budget</Text>
                    <View style={[styles.bar, { width: barWidth, backgroundColor: '#4CAF50' }]}>
                        <Text style={styles.barLabel}>{totalBudget}</Text>
                    </View>
                </View>

                <View style={styles.budgetSummarySection}>
                    <Text style={styles.sectionTitle}>Total Expenses</Text>
                    <View style={[styles.bar, { width: (totalExpenses / totalBudget) * barWidth, backgroundColor: '#FF5252' }]}>
                        <Text style={styles.barLabel}>{totalExpenses}</Text>
                    </View>
                </View>

                <View style={styles.budgetSummarySection}>
                    <Text style={styles.sectionTitle}>Remaining Budget</Text>
                    <View style={[styles.bar, { width: (remainingBudget / totalBudget) * barWidth, backgroundColor: '#2b822b' }]}>
                        <Text style={styles.barLabel}>{remainingBudget}</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleSize(10),
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(18),
        elevation: 3,
    },
    title: {
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        color: '#333',
    },
    content: {
        flex: 1,
    },
    budgetSummarySection: {
        marginBottom: scaleSize(20),
        backgroundColor: '#E5F9E7',
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
    bar: {
        height: scaleSize(20),
        borderRadius: scaleSize(10),
        justifyContent: 'center',
        marginLeft: scaleSize(10),
        backgroundColor: '#2b822b',
    },
    barLabel: {
        color: '#fff',
        textAlign: 'center',
        fontSize: scaleFont(1.8),
    },
});
