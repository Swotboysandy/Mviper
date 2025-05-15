import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/Theme';
import { ReactNode } from 'react';

type MenuItemProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export default function MenuItem({ icon, title, subtitle, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Theme.colors.textPrimary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Theme.colors.textSecondary,
  },
});