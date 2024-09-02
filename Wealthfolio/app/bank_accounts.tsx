import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function AccountPage() {
    const router = useRouter()
    
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <FontAwesome name="arrow-left" size={scaleSize(20)} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Your Accounts</Text>
            </View>

            <ScrollView style={styles.accountContainer} showsVerticalScrollIndicator={false}>
                {/* Account Card 1 */}
                <View style={styles.accountCard}>
                    <View style={styles.accountInfo}>
                        <Text style={styles.accountLabel}>Account Number</Text>
                        <Text style={styles.accountValue}>****************5372</Text>
                        <TouchableOpacity style={styles.copyIcon}>
                            <FontAwesome name="copy" size={scaleSize(18)} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.accountInfo}>
                        <Text style={styles.accountLabel}>IFSC Code</Text>
                        <Text style={styles.accountValue}>BKID000****</Text>
                        <TouchableOpacity style={styles.copyIcon}>
                            <FontAwesome name="copy" size={scaleSize(18)} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.balanceSection}>
                        <Text style={styles.balanceLabel}>Account balance</Text>
                        <Text style={styles.balanceValue}>$12.395</Text>
                        <TouchableOpacity>
                            <FontAwesome name="eye-slash" size={scaleSize(18)} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Account Card 2 */}
                <View style={styles.accountCard}>
                    <View style={styles.accountInfo}>
                        <Text style={styles.accountLabel}>Account Number</Text>
                        <Text style={styles.accountValue}>****************5372</Text>
                        <TouchableOpacity style={styles.copyIcon}>
                            <FontAwesome name="copy" size={scaleSize(18)} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.accountInfo}>
                        <Text style={styles.accountLabel}>IFSC Code</Text>
                        <Text style={styles.accountValue}>BKID000****</Text>
                        <TouchableOpacity style={styles.copyIcon}>
                            <FontAwesome name="copy" size={scaleSize(18)} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.balanceSection}>
                        <Text style={styles.balanceLabel}>Account balance</Text>
                        <Text style={styles.balanceValue}>$12.395</Text>
                        <TouchableOpacity>
                            <FontAwesome name="eye-slash" size={scaleSize(18)} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Add Bank Account Button */}
                <TouchableOpacity style={styles.addAccountButton} onPress={() => router.push('/add_account')}>
                    <FontAwesome name="bank" size={scaleSize(20)} color="#333" />
                    <Text style={styles.addAccountText}>Add bank account</Text>
                </TouchableOpacity>
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
    title: {
        fontSize: scaleFont(2.5),
        fontWeight: '600',
        color: '#333',
    },
    accountContainer: {
        flex: 1,
    },
    accountCard: {
        backgroundColor: '#C3F9C8',
        borderRadius: scaleSize(15),
        padding: scaleSize(15),
        marginBottom: scaleSize(20),
    },
    accountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(10),
    },
    accountLabel: {
        flex: 1,
        fontSize: scaleFont(2),
        color: '#333',
    },
    accountValue: {
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#2b822b',
    },
    copyIcon: {
        marginLeft: scaleSize(10),
    },
    balanceSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    balanceLabel: {
        fontSize: scaleFont(2),
        color: '#333',
    },
    balanceValue: {
        fontSize: scaleFont(2.2),
        fontWeight: '600',
        color: '#2b822b',
    },
    addAccountButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(20),
    },
    addAccountText: {
        marginLeft: scaleSize(10),
        fontSize: scaleFont(2),
        fontWeight: '600',
        color: '#333',
    },
});
