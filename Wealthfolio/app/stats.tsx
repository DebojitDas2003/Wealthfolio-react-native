import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function StatsPage() {
    const router = useRouter();

    const data = [
        { key: 1, amount: 2880, fill: '#F44336', label: 'Wine Shop', value: '40%' },
        { key: 2, amount: 1440, fill: '#2196F3', label: 'Medicines', value: '20%' },
        { key: 3, amount: 720, fill: '#FFC107', label: 'Mobile Recharge', value: '10%' },
        { key: 4, amount: 1152, fill: '#4CAF50', label: 'Electric Bill', value: '16%' },
        { key: 5, amount: 576, fill: '#FF9800', label: 'Grocery', value: '8%' },
        { key: 6, amount: 432, fill: '#9C27B0', label: 'Cigarette', value: '6%' },
    ];

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
                    <Text style={styles.title}>Statistics</Text>
                </View>
            </View>

            <ScrollView style={styles.statsContainer} showsVerticalScrollIndicator={false}>
                {/* Summary Cards */}
                <View style={styles.summaryContainer}>
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTitle}>Total Balance</Text>
                        <Text style={styles.summaryValue}>$12,395</Text>
                    </View>
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTitle}>Monthly Spending</Text>
                        <Text style={styles.summaryValue}>$2,024</Text>
                    </View>
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTitle}>Savings Progress</Text>
                        <Text style={styles.summaryValue}>$3,450</Text>
                    </View>
                </View>

                {/* Chart Section */}
                <View style={styles.chartSection}>
                    {/* Placeholder for the circular chart */}
                    <View style={styles.pieChartPlaceholder}>
                        <Text style={styles.totalAmountText}>7200</Text>
                    </View>
                    <Text style={styles.totalExpenseText}>Total Expense</Text>
                </View>

                {/* Details Section */}
                <View style={styles.detailsSection}>
                    <View style={styles.detailsHeader}>
                        <Text style={styles.detailsHeaderText}>Label</Text>
                        <Text style={styles.detailsHeaderText}>Value</Text>
                        <Text style={styles.detailsHeaderText}>%</Text>
                    </View>
                    {data.map((item) => (
                        <View key={item.key} style={styles.detailsRow}>
                            <View style={[styles.labelDot, { backgroundColor: item.fill }]} />
                            <Text style={styles.detailsText}>{item.label}</Text>
                            <Text style={styles.detailsText}>{item.amount}</Text>
                            <Text style={styles.detailsText}>{item.value}</Text>
                        </View>
                    ))}
                </View>

                {/* AI Insights Section */}
                <View style={styles.aiInsights}>
                    <Text style={styles.aiHeaderText}>AI Insights</Text>
                    <View style={styles.insightBox}>
                        <Text style={styles.insightText}>
                            - AI can verify compliance with policies and approved spending limits
                        </Text>
                        <Text style={styles.insightText}>
                            - AI analyzes historical spending patterns to identify trends and anomalies
                        </Text>
                    </View>
                </View>

            </ScrollView>

            {/* Navigation */}
            <View style={styles.navigation}>
                <TouchableOpacity onPress={() => router.push('/home')}>
                    <FontAwesome name="home" size={scaleSize(24)} color="#666"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/transactions')}>
                    <FontAwesome name="history" size={scaleSize(24)} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerButton}>
                    <FontAwesome name="comment" size={scaleSize(24)} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="pie-chart" size={scaleSize(24)} color="#2b822b" />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => router.push('/profile')}>
                    <FontAwesome name="user" size={scaleSize(24)} color="#666"/>
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
        marginBottom: scaleSize(10),
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
    statsContainer: {
        flex: 1,
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaleSize(20),
    },
    summaryCard: {
        flex: 1,
        backgroundColor: '#E5F9E7',
        padding: scaleSize(15),
        borderRadius: scaleSize(15),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: scaleSize(5),
        elevation: 3,
    },
    summaryTitle: {
        fontSize: scaleFont(1.8),
        color: '#666',
        marginBottom: scaleSize(5),
        textAlign: 'center',
    },
    summaryValue: {
        fontSize: scaleFont(2.5),
        fontWeight: 'bold',
        color: '#333',
    },
    chartSection: {
        alignItems: 'center',
        marginBottom: scaleSize(20),
        backgroundColor: '#E5F9E7',
        borderRadius: scaleSize(15),
        padding: scaleSize(20),
    },
    pieChartPlaceholder: {
        width: scaleSize(150),
        height: scaleSize(150),
        borderRadius: scaleSize(75),
        backgroundColor: '#C3F9C8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalExpenseText: {
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#2b822b',
        marginTop: scaleSize(10),
    },
    totalAmountText: {
        fontSize: scaleFont(3),
        fontWeight: 'bold',
        color: '#2b822b',
    },
    detailsSection: {
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        marginBottom: scaleSize(20),
    },
    detailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scaleSize(10),
        marginBottom: scaleSize(10),
    },
    detailsHeaderText: {
        fontSize: scaleFont(1.8),
        fontWeight: '600',
        color: '#333',
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleSize(10),
    },
    detailsText: {
        fontSize: scaleFont(1.6),
        color: '#333',
        marginHorizontal: scaleSize(5),
    },
    labelDot: {
        width: scaleSize(10),
        height: scaleSize(10),
        borderRadius: scaleSize(5),
        marginRight: scaleSize(10),
    },
    aiInsights: {
        backgroundColor: '#D1FFD6',
        borderRadius: scaleSize(15),
        paddingVertical: scaleSize(15),
        paddingHorizontal: scaleSize(5),
        marginBottom: scaleSize(10),
    },
    aiHeaderText: {
        fontSize: scaleFont(2.4),
        fontWeight: 'bold',
        color: '#2b822b',
        marginBottom: scaleSize(10),
        textAlign: 'center',
    },
    insightBox: {
        backgroundColor: '#30A13C',
        borderRadius: scaleSize(10),
        padding: scaleSize(15),
    },
    insightText: {
        fontSize: scaleFont(1.6),
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: scaleSize(5),
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
