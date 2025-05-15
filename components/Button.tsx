import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '@/constants/Theme';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  style, 
  textStyle,
  disabled = false 
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    disabled && styles.disabledButton,
    style,
  ];
  
  const textStyles = [
    styles.buttonText,
    variant === 'primary' && styles.primaryButtonText,
    variant === 'secondary' && styles.secondaryButtonText,
    variant === 'outline' && styles.outlineButtonText,
    disabled && styles.disabledButtonText,
    textStyle,
  ];
  
  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
  disabledButton: {
    backgroundColor: 'rgba(99, 102, 241, 0.3)',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  primaryButtonText: {
    color: Theme.colors.white,
  },
  secondaryButtonText: {
    color: Theme.colors.primary,
  },
  outlineButtonText: {
    color: Theme.colors.primary,
  },
  disabledButtonText: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
});