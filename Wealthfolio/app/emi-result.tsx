import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function EMIResultPage({ route }) {
    const { emi, totalInterest, totalPayment, principal } = route.params;

    const data = [
        {
            name: 'Principal',
            amount: principal,
            color: '#4CAF50',
            legendFontColor: '#333',
            legendFontSize: scaleFont(1.8),
        },
        {
            name: 'Interest',
            amount: totalInterest,
            color: '#FF9800',
            legendFontColor: '#333',
            legendFontSize: scaleFont(1.8),
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>EMI Calculation Result</Text>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Monthly EMI: ₹ {emi.toFixed(2)}</Text>
                <Text style={styles.resultText}>Total Interest: ₹ {totalInterest.toFixed(2)}</Text>
                <Text style={styles.resultText}>Total Payment: ₹ {totalPayment.toFixed(2)}</Text>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Payment Breakdown</Text>
                <PieChart
                    data={data}
                    width={Dimensions.get('window').width - 40}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#ffffff',
                        backgroundGradientTo: '#ffffff',
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor="amount"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#D1FFD6',
        alignItems: 'center',
        padding: scaleSize(20),
    },
    header: {
        height: scaleSize(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scaleSize(20),
    },
    title: {
        fontSize: scaleFont(2.5),
        fontWeight: 'bold',
        color: '#333',
    },
    resultContainer: {
        width: '100%',
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        marginBottom: scaleSize(20),
        alignItems: 'center',
    },
    resultText: {
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#2b822b',
        marginBottom: scaleSize(10),
    },
    chartContainer: {
        width: '100%',
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        alignItems: 'center',
    },
    chartTitle: {
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        color: '#2b822b',
        marginBottom: scaleSize(15),
    },
});
