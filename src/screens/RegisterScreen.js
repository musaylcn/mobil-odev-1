import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const RegisterScreen = ({ route, navigation }) => {
    const { role } = route.params || { role: 'Öğrenci' };
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.modalCard}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{role}</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => navigation.popToTop()}
                            >
                                <Text style={styles.closeIcon}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.divider}>
                            <View style={styles.line} />
                            <Text style={styles.dividerText}>veya</Text>
                            <View style={styles.line} />
                        </View>

                        <View style={styles.form}>
                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.input, { flex: 1, marginRight: 10 }]}
                                    placeholder="First Name"
                                    placeholderTextColor="#999"
                                    value={firstName}
                                    onChangeText={setFirstName}
                                />
                                <TextInput
                                    style={[styles.input, { flex: 1 }]}
                                    placeholder="Last Name"
                                    placeholderTextColor="#999"
                                    value={lastName}
                                    onChangeText={setLastName}
                                />
                            </View>

                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="#999"
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize="none"
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#999"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />

                            <Text style={styles.termsText}>
                                Kaydolarak <Text style={styles.link}>Hizmet Şartlarımızı</Text> ve <Text style={styles.link}>Gizlilik Politikamızı</Text> kabul etmiş olursunuz.
                            </Text>

                            <TouchableOpacity
                                style={styles.signUpButton}
                                onPress={() => {
                                    alert('Kayıt başarılı!');
                                    navigation.popToTop();
                                }}
                            >
                                <Text style={styles.signUpButtonText}>Kaydol</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
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
        marginBottom: 20,
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
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#EEE',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#999',
        fontSize: 12,
    },
    form: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#EEE',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
    },
    termsText: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        marginBottom: 25,
        lineHeight: 18,
    },
    link: {
        color: '#0084D1',
        fontWeight: '600',
    },
    signUpButton: {
        backgroundColor: '#0084D1',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    signUpButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default RegisterScreen;
