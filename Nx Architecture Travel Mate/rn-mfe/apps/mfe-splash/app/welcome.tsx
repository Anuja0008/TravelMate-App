import { useRouter } from 'expo-router'; // ✅ use expo-router navigation
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function TravelMateWelcome() {
  const router = useRouter(); // ✅ get router instance

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1b5e20" />

      <View style={styles.background} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.appName}>TRAVEL MATE</Text>

        <Image
          source={require('../assets/images/logo.png')} // Ensure this path is correct
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.tagline}>
          Your trusted travel companion for unforgettable journeys.
        </Text>

        <TouchableOpacity
          style={styles.button}
        //   onPress={() => router.push('/Login')} // ✅ Navigate to login screen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Travel Mate. All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative', backgroundColor: '#e8f5e9' },
  background: { ...StyleSheet.absoluteFillObject, backgroundColor: '#e8f5e9' },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: height * 0.1,
    paddingBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#2e7d32',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 10,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1b5e20',
    letterSpacing: 3,
    marginBottom: 50,
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  tagline: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 40,
    paddingHorizontal: 10,
    fontStyle: 'italic',
    shadowColor: '#000',
  },
  button: {
    backgroundColor: '#1b5e20',
    width: '100%',
    height: 60,
    paddingHorizontal: 70,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  footer: { alignItems: 'center', paddingVertical: 10 },
  footerText: { fontSize: 12, color: '#777' },
});
