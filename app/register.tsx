import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Button from '@/components/Button';
import { Theme } from '@/constants/Theme';

export default function RegisterScreen() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      await axios.post('https://api-mviper.multioriontech.com/api/register', form);
      setLoading(false);
      Alert.alert('Registration Successful', 'You can now log in.', [
        { text: 'OK', onPress: () => router.replace('/login') }
      ]);
    } catch (err: any) {
      setLoading(false);
      Alert.alert('Registration Failed', err.response?.data?.message || 'Please check your details');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor={Theme.colors.placeholder}
        value={form.firstname}
        onChangeText={v => handleChange('firstname', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={Theme.colors.placeholder}
        value={form.lastname}
        onChangeText={v => handleChange('lastname', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Theme.colors.placeholder}
        value={form.email}
        onChangeText={v => handleChange('email', v)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={Theme.colors.placeholder}
        value={form.username}
        onChangeText={v => handleChange('username', v)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Theme.colors.placeholder}
        value={form.password}
        onChangeText={v => handleChange('password', v)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={Theme.colors.placeholder}
        value={form.password_confirmation}
        onChangeText={v => handleChange('password_confirmation', v)}
        secureTextEntry
      />
      <Button title={loading ? 'Registering...' : 'Register'} onPress={handleRegister} disabled={loading} />
      <Text style={styles.switchText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => router.replace('/login')}>Login</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Theme.colors.background,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    color: Theme.colors.textPrimary,
    fontFamily: 'Inter-Bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    backgroundColor: Theme.colors.inputBackground,
    color: Theme.colors.textPrimary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  switchText: {
    color: Theme.colors.textSecondary,
    marginTop: 24,
    textAlign: 'center',
  },
  link: {
    color: Theme.colors.primary,
    fontFamily: 'Inter-Medium',
  },
});