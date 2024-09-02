import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const scale = width / 375;

const scaleSize = (size: number): number => size * scale;
const scaleFont = (size: number): number => RFPercentage(size);

export default function ChatbotPage() {
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hello! How can I assist you today?' },
    ]);
    const [inputText, setInputText] = useState('');

    const faqs = [
        'How do I check my balance?',
        'How can I set a financial goal?',
        'What are the available payment methods?',
        'How do I reset my password?',
        'How can I manage my subscriptions?',
    ];

    const [faqVisible, setFaqVisible] = useState(false);

    const toggleFaqVisibility = () => {
        setFaqVisible(!faqVisible);
    };

    const sendMessage = (text: string) => {
        if (text.trim()) {
            // Create the new user message
            const userMessage = { id: messages.length + 1, type: 'user', text };
    
            // Update the message list with the user message
            setMessages((prevMessages) => [...prevMessages, userMessage]);
    
            // Clear the input field
            setInputText('');
    
            // Simulate bot response after the user message
            setTimeout(() => {
                const botMessage = { id: userMessage.id + 1, type: 'bot', text: 'Let me look into that for you...' };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 1000);
        }
    };
    
    
    

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Chat with Us</Text>
            </View>

            {/* Chat Area */}
            <ScrollView style={styles.chatArea} showsVerticalScrollIndicator={false}>
                {messages.map((message) => (
                    <View
                        key={message.id}
                        style={[
                            styles.messageContainer,
                            message.type === 'user' ? styles.userMessage : styles.botMessage,
                        ]}
                    >
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* FAQ Section */}
            <View style={styles.faqSection}>
                <TouchableOpacity onPress={toggleFaqVisibility} style={styles.faqHeader}>
                    <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
                    <FontAwesome
                        name={faqVisible ? 'chevron-down' : 'chevron-up'}
                        size={scaleSize(16)}
                        color="#4682B4"
                    />
                </TouchableOpacity>
                {faqVisible && (
                    faqs.map((faq, index) => (
                        <TouchableOpacity key={index} style={styles.faqItem} onPress={() => sendMessage(faq)}>
                            <Text style={styles.faqText}>{faq}</Text>
                        </TouchableOpacity>
                    ))
                )}
            </View>

            {/* Input Section */}
            <View style={styles.inputSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    placeholderTextColor="#999"
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={() => sendMessage(inputText)}>
                    <FontAwesome name="send" size={scaleSize(20)} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF', // Light blue background
        padding: scaleSize(20),
    },
    header: {
        paddingVertical: scaleSize(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4682B4', // Steel blue header background
        borderRadius: scaleSize(10),
    },
    headerTitle: {
        fontSize: scaleFont(2.5),
        fontWeight: 'bold',
        color: '#FFFFFF', // White text
    },
    chatArea: {
        flex: 1,
        marginVertical: scaleSize(20),
    },
    messageContainer: {
        padding: scaleSize(15),
        borderRadius: scaleSize(10),
        marginBottom: scaleSize(10),
        maxWidth: '80%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#ADD8E6', // Light blue user message background
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E0FFFF', // Light cyan bot message background
    },
    messageText: {
        fontSize: scaleFont(2),
        color: '#333',
    },
    faqSection: {
        marginVertical: scaleSize(20),
        padding: scaleSize(10),
        backgroundColor: '#E6E6FA', // Lavender background
        borderRadius: scaleSize(10),
    },
    faqTitle: {
        fontSize: scaleFont(2.2),
        fontWeight: 'bold',
        color: '#4682B4', // Steel blue text color
        marginBottom: scaleSize(10),
    },
    faqHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    faqItem: {
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(15),
        backgroundColor: '#FFF',
        borderRadius: scaleSize(10),
        marginBottom: scaleSize(10),
        elevation: 2,
    },
    faqText: {
        fontSize: scaleFont(2),
        color: '#333',
    },
    inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: scaleSize(20),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(15),
        elevation: 3,
    },
    input: {
        flex: 1,
        fontSize: scaleFont(2),
        color: '#333',
    },
    sendButton: {
        backgroundColor: '#4682B4', // Steel blue send button
        borderRadius: scaleSize(20),
        padding: scaleSize(10),
        marginLeft: scaleSize(10),
    },
});
