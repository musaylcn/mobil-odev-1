import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const RoleSelectionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.modalCard}>
                <View style={styles.header}>
                    <Text style={styles.title}>Kaydol</Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.closeIcon}>✕</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rolesContainer}>
                    <TouchableOpacity
                        style={styles.roleCard}
                        onPress={() => navigation.navigate('Register', { role: 'Öğretmen' })}
                    >
                        <View style={styles.iconPlaceholder}>
                            <Text style={styles.emoji}>👩‍🏫</Text>
                        </View>
                        <View style={styles.roleButton}>
                            <Text style={styles.roleButtonText}>Öğretmen</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.roleCard}
                        onPress={() => navigation.navigate('Register', { role: 'Öğrenci' })}
                    >
                        <View style={styles.iconPlaceholder}>
                            <Text style={styles.emoji}>👨‍🎓</Text>
                        </View>
                        <View style={styles.roleButton}>
                            <Text style={styles.roleButtonText}>Öğrenci</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Zaten hesabınız var mı? <Text style={styles.loginLink}>Oturum aç</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCard: {
        width: width * 0.9,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        position: 'relative',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
    },
    closeButton: {
        position: 'absolute',
        right: 0,
        padding: 5,
    },
    closeIcon: {
        fontSize: 20,
        color: '#666',
    },
    rolesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 40,
    },
    roleCard: {
        alignItems: 'center',
        width: width * 0.35,
    },
    iconPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    emoji: {
        fontSize: 50,
    },
    roleButton: {
        borderWidth: 1,
        borderColor: '#CCC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
    },
    roleButtonText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    footer: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
    loginLink: {
        color: '#0084D1',
        fontWeight: '700',
    },
});

export default RoleSelectionScreen;
