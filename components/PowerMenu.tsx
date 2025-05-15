import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '@/constants/Theme';
import MenuItem from './MenuItem';
import { Heart, SquarePen as PenSquare, Compass, Target, Users } from 'lucide-react-native';

export default function PowerMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Base Level</Text>
        <Text style={styles.subtitle}>Power Menu</Text>
      </View>
      
      <View style={styles.menuItems}>
        <MenuItem 
          icon={<Heart size={20} color={Theme.colors.textPrimary} />}
          title="Track Your Mood"
          subtitle="Track your mood during gaming"
        />
        
        <MenuItem 
          icon={<PenSquare size={20} color={Theme.colors.textPrimary} />}
          title="Write Today's Story"
          subtitle="Menu description"
        />
        
        <MenuItem 
          icon={<Compass size={20} color={Theme.colors.textPrimary} />}
          title="Begin Meditation"
          subtitle="Menu description"
        />
        
        <MenuItem 
          icon={<Target size={20} color={Theme.colors.textPrimary} />}
          title="Review Goals"
          subtitle="Menu description"
        />
        
        <MenuItem 
          icon={<Users size={20} color={Theme.colors.textPrimary} />}
          title="Community Chat"
          subtitle="Menu description"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Theme.colors.textSecondary,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Theme.colors.textPrimary,
  },
  menuItems: {
    gap: 8,
  },
});