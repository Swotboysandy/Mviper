import { View, Text, Image, StyleSheet } from 'react-native';
import { Theme } from '@/constants/Theme';
import { format } from 'date-fns';

type ProfileHeaderProps = {
  name: string;
  date: Date;
};

export default function ProfileHeader({ name, date }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text style={styles.welcomeText}>Welcome back, {name}</Text>
        <Text style={styles.dateText}>
          {format(date, 'EEEE, MMM do, yyyy | h:mm a')}
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerInfo: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Theme.colors.textPrimary,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Theme.colors.textSecondary,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Theme.colors.cardBackground,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});