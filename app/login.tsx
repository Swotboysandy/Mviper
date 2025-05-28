import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Button from '@/components/Button';
import { Theme } from '@/constants/Theme';

export default function LoginScreen() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post('https://api-mviper.multioriontech.com/api/login', form);
      // Save token if needed: localStorage.setItem('token', res.data.token);
      setLoading(false);
      router.replace('/(tabs)'); // Redirect to main UI
    } catch (err: any) {
      setLoading(false);
      Alert.alert('Login Failed', err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} disabled={loading} />
      <Text style={styles.switchText}>
        Don't have an account?{' '}
        <Text style={styles.link} onPress={() => router.replace('/register')}>Register</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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