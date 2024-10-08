import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native'
import { useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import CustomSidebar from './sidebar'

const { width, height } = Dimensions.get('window')
const scale = width / 375 // Base width for scaling

const scaleSize = (size: number): number => size * scale
// Specify the type of `size` as `number` for scaleFont
const scaleFont = (size: number): number => RFPercentage(size)

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:5000/auth_redirect/profile',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Content-Type': 'application/json',
            },
          }
        )

        if (response.ok) {
          const data = await response.json()
          setUsername(data.username) // Set the fetched username
        } else {
          console.error('Failed to fetch user profile')
        }
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    fetchUserProfile()
  }, [])

  const logout = () => {
    router.push('/login')
  }

  const [sidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
  }

  const [isBalanceHidden, setIsBalanceHidden] = useState(false)

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden)
  }

  const transactions = [
    {
      id: '1',
      name: 'Paypal',
      time: 'Today | 10AM | Deposit',
      amount: '-$1,590',
    },
    {
      id: '2',
      name: 'Paypal',
      time: 'Today | 10AM | Deposit',
      amount: '-$1,590',
    },
    {
      id: '3',
      name: 'Paypal',
      time: 'Today | 10AM | Deposit',
      amount: '-$1,590',
    },
  ]

  const viewAll = () => {
    router.push('/transactions')
  }

  const renderItem = ({
    item,
  }: {
    item: { id: string; name: string; time: string; amount: string }
  }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        <View style={styles.iconContainer}>
          <FontAwesome name="circle" size={scaleSize(24)} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.transactionName}>{item.name}</Text>
          <Text style={styles.transactionTime}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Image
              source={{
                uri: 'https://example.com/your-profile-image.jpg',
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.welcomeText}>Welcome Back 👋</Text>
            <Text style={styles.username}>{username}</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="cloud" size={scaleSize(20)} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome
              name="bell"
              size={scaleSize(20)}
              color="black"
              onPress={() => router.push('/notifications')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <Text style={styles.greetingText}>GOOD MORNING!</Text>

        {/* Today's Expenses */}
        <View style={styles.expenseContainer}>
          <Text style={styles.expenseTitle}>Today's Expenses</Text>
          <View style={styles.expenseChart}>
            {/* Placeholder for the expense chart */}
            <Text style={styles.expenseAmount}>7200</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/referral')}>
            <FontAwesome
              name="plus"
              size={scaleSize(24)}
              color="#2b822b" />
            <Text style={styles.actionText}>Refer & Earn</Text>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="plus" size={scaleSize(24)} color="#2b822b" />
            <Text style={styles.actionText}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/remaining_budget')}
          >
            <FontAwesome
              name="pie-chart"
              size={scaleSize(24)}
              color="#2b822b"
            />
            <Text style={styles.actionText}>Remaining Budget</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/budget_predictor')}
          >
            <FontAwesome
              name="calculator"
              size={scaleSize(24)}
              color="#2b822b"
            />
            <Text style={styles.actionText}>Budget Predictor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/goals')}>
            <FontAwesome
              name="bullseye"
              size={scaleSize(24)}
              color="#2b822b" />
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="bullseye" size={scaleSize(24)} color="#2b822b" />
            <Text style={styles.actionText}>Set Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/debt')}>
            <FontAwesome
              name="balance-scale"
              size={scaleSize(24)}
              color="#2b822b"
            />
            <Text style={styles.actionText}>Debt Management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/cards')}
          >
            <FontAwesome
              name="credit-card"
              size={scaleSize(24)}
              color="#2b822b"
            />
            <Text style={styles.actionText}>Your Cards</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/bank_accounts')}>
            <FontAwesome
              name="bullseye"
              size={scaleSize(24)}
              color="#2b822b" />
            <Text style={styles.actionText}>My Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/calculator')}>
            <FontAwesome
              name="balance-scale"
              size={scaleSize(24)}
              color="#2b822b"
            />
            <Text style={styles.actionText}>EMI Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/rewards')}>
            <FontAwesome
              name="credit-card"
              size={scaleSize(24)}
              color="#2b822b"
            />
            <Text style={styles.actionText}>Your Rewards</Text>
          </TouchableOpacity>
        </View>

        {/* Account Balance */}
        <View style={styles.balanceContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.balanceTitle}>Account balance</Text>
            <View style={styles.balance}>
              <FontAwesome name="rupee" size={scaleSize(18)} color="#1E1F4B" />
              <Text style={styles.balanceAmount}>
                {isBalanceHidden ? '*****' : '12,395'}
              </Text>
              <TouchableOpacity onPress={toggleBalanceVisibility}>
                <FontAwesome
                  name={isBalanceHidden ? 'eye-slash' : 'eye'}
                  size={scaleSize(16)}
                  color="black"
                  style={styles.balanceIcons}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.addAccount}
              onPress={() => router.push('/add_account')}
            >
              <FontAwesome name="bank" size={scaleSize(15)} color="#1E1F4B" />
              <Text style={styles.addAccountText}>Add bank account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.indicator}>
              <FontAwesome name="circle" size={scaleSize(18)} color="#1E88E5" />
              <Text style={styles.indicatorText}>
                {isBalanceHidden ? '$ *****' : '$10,000'}
              </Text>
            </View>
            <View style={styles.indicator}>
              <FontAwesome
                name="exclamation-triangle"
                size={scaleSize(18)}
                color="#FFC107"
              />
              <Text style={styles.indicatorText}>
                {isBalanceHidden ? '$ *****' : '$2,395'}
              </Text>
            </View>
          </View>
        </View>

        {/* Last Transactions */}
        <View style={styles.containers}>
          <Text style={styles.lastTransactionsTitle}>Last Transactions</Text>
          <FlatList
            data={transactions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />
          <TouchableOpacity style={styles.viewAllButton}>
            <Text
              style={styles.viewAllText}
              onPress={() => router.push('/transactions')}
            >
              view all
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navigation */}
      <View style={styles.module}>
            {/* Add with Voice Button */}
            <TouchableOpacity style={styles.voiceButton}>
                <FontAwesome name="microphone" size={scaleSize(20)} color="#FF5722" />
                <Text style={styles.voiceButtonText}>Add with voice</Text>
            </TouchableOpacity>

            {/* Scan Bill Button */}
            <TouchableOpacity style={styles.scanButton}>
                <FontAwesome name="qrcode" size={scaleSize(20)} color="#fff" />
                <Text style={styles.scanButtonText}>Scan bill</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity>
          <FontAwesome name="home" size={scaleSize(24)} color="#2b822b" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/transactions')}>
          <FontAwesome name="history" size={scaleSize(24)} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerButton}
          onPress={() => router.push('/chatbot')}
        >
          <FontAwesome name="comment" size={scaleSize(24)} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/stats')}>
          <FontAwesome name="pie-chart" size={scaleSize(24)} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <FontAwesome name="user" size={scaleSize(24)} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: scaleSize(20),
    paddingTop: scaleSize(10),
    paddingBottom: scaleSize(130),
    backgroundColor: '#D1FFD6',
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
  welcomeText: {
    fontSize: scaleFont(2.1),
    fontWeight: '600',
    color: '#333',
  },
  username: {
    fontSize: scaleFont(1.8),
    color: '#666',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: scaleSize(7),
    borderColor: 'black',
  },
  greetingText: {
    fontSize: scaleFont(4.8),
    fontWeight: '800',
    color: '#2b822b',
    marginBottom: scaleSize(20),
    paddingRight: scaleSize(50),
    textShadowColor: '#C3F9C8', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow's offset
    textShadowRadius: 3, // Shadow blur radius
  },
  expenseContainer: {
    backgroundColor: '#C3F9C8',
    padding: scaleSize(20),
    borderRadius: scaleSize(20),
    marginBottom: scaleSize(20),
    height: scaleSize(230),
    alignItems: 'center',
    elevation: 2.5,
  },
  expenseTitle: {
    fontSize: scaleFont(3),
    fontWeight: '500',
    color: '#333',
    marginBottom: scaleSize(10),
    textAlign: 'center',
  },
  expenseChart: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleSize(150),
    width: scaleSize(150),
    backgroundColor: '#f5f5f5',
    borderRadius: scaleSize(75),
  },
  expenseAmount: {
    fontSize: scaleFont(3.5),
    fontWeight: 'bold',
    color: '#2b822b',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: scaleSize(20),
  },
  actionButton: {
    backgroundColor: '#E5F9E7',
    padding: scaleSize(10),
    borderRadius: scaleSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: scaleSize(80),
    elevation: 1,
  },
  actionText: {
    fontSize: scaleFont(1.4),
    fontWeight: 'medium',
    color: '#1E1F4B',
    marginTop: scaleSize(5),
  },
  balanceContainer: {
    backgroundColor: '#C3F9C8',
    padding: scaleSize(20),
    borderRadius: scaleSize(20),
    marginBottom: scaleSize(20),
    flexDirection: 'row',
    elevation: 3,
  },
  leftContainer: {
    width: '75%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightContainer: {
    width: '25%',
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: scaleFont(1.8),
    fontWeight: '500',
    color: 'grey',
    marginBottom: scaleSize(10),
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: scaleFont(4),
    fontWeight: 'bold',
    color: '#2b822b',
    marginBottom: scaleSize(10),
    marginLeft: scaleSize(10),
  },
  balanceIcons: {
    marginLeft: scaleSize(20),
    marginBottom: scaleSize(10),
  },
  addAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSize(10),
  },
  addAccountText: {
    fontSize: scaleFont(1.8),
    fontWeight: '400',
    color: '#1E1F4B',
    marginLeft: scaleSize(10),
  },
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scaleSize(20),
    marginTop: scaleSize(7),
  },
  indicatorText: {
    marginLeft: scaleSize(5),
    color: '#2B2B2B',
    fontSize: scaleFont(1.5),
  },
  lastTransactionsTitle: {
    fontSize: scaleFont(2.2),
    fontWeight: '600',
    color: '#333',
    marginBottom: scaleSize(5),
  },
  viewAllButton: {
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: scaleFont(1.8),
    color: '#1E1F4B',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  containers: {
    marginBottom: scaleSize(20),
  },
  headerText: {
    fontSize: scaleFont(2.2),
    fontWeight: 'bold',
    color: '#1E1F4B',
    marginBottom: scaleSize(10),
  },
  viewAll: {
    color: '#6C63FF',
    fontSize: scaleFont(1.8),
  },
  listContent: {
    paddingBottom: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scaleSize(10),
  },
  transactionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: scaleSize(40),
    height: scaleSize(40),
    borderRadius: scaleSize(20),
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleSize(10),
  },
  icon: {
    color: '#E0E7FF',
  },
  transactionName: {
    fontSize: scaleFont(1.6),
    fontWeight: 'bold',
    color: '#1E1F4B',
  },
  transactionTime: {
    color: '#7B8D93',
    fontSize: scaleFont(1.4),
  },
  amountContainer: {
    backgroundColor: '#E0E7FF',
    borderRadius: scaleSize(20),
    paddingHorizontal: scaleSize(15),
    paddingVertical: scaleSize(5),
  },
  transactionAmount: {
    fontSize: scaleFont(1.6),
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  module: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -scaleSize(85),
    marginBottom: scaleSize(40),
  },
  voiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E496F',
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(15),
    borderTopLeftRadius: scaleSize(25),
    borderBottomLeftRadius: scaleSize(25),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: width* 0.3,
    height: height* 0.06
  },
  voiceButtonText: {
    color: '#fff',
    fontSize: scaleFont(1.5),
    marginLeft: scaleSize(10),
    fontWeight: '400',
    textAlign: 'center',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(15),
    borderTopRightRadius: scaleSize(25),
    borderBottomRightRadius: scaleSize(25),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: width* 0.3,
    height: height* 0.06
  },
  scanButtonText: {
    color: '#fff',
    fontSize: scaleFont(1.8),
    marginLeft: scaleSize(10),
    fontWeight: '400',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSize(20),
    paddingVertical: scaleSize(15),
    backgroundColor: '#fff',
    borderRadius: scaleSize(20),
    position: 'absolute',
    bottom: scaleSize(80),
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
})
