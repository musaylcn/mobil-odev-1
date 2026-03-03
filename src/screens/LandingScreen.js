import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
            {/* Simple logo placeholder */}
          <View style={styles.logo}>
            <Text style={styles.logoText}>🧩</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Herhangi bir videoyu dersin yapın</Text>
        <Text style={styles.description}>
          Bir video seçin, büyülü dokunuşunuzu ekleyin ve öğrencilerinizin anlayışını izleyin
        </Text>

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => navigation.navigate('RoleSelection')}
        >
          <Text style={styles.signUpButtonText}>Kaydol</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Image 
          source={{ uri: 'https://img.freepik.com/free-vector/video-streaming-concept-illustration_114360-6415.jpg' }} // Placeholder illustration
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  logoContainer: {
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: -40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 40,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  signUpButton: {
    backgroundColor: '#0084D1',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  illustration: {
    width: width * 0.9,
    height: 200,
    marginBottom: -20,
  },
});

export default LandingScreen;
