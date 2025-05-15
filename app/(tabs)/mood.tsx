import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/Theme';
import { Smile, Frown, Meh, Heart, Wind, CloudRain } from 'lucide-react-native';
import Button from '@/components/Button';
import ScreenHeader from '@/components/ScreenHeader';

export default function MoodScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View 
      style={[
        styles.container,
        { 
          paddingTop: insets.top,
          paddingBottom: 80 + insets.bottom 
        }
      ]}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ScreenHeader title="Track Your Mood" />
        
        <Text style={styles.subtitle}>How are you feeling today?</Text>
        
        <View style={styles.moodGrid}>
          <View style={styles.moodCard}>
            <Smile color={Theme.colors.success} size={48} />
            <Text style={styles.moodText}>Happy</Text>
          </View>
          
          <View style={styles.moodCard}>
            <Meh color={Theme.colors.warning} size={48} />
            <Text style={styles.moodText}>Neutral</Text>
          </View>
          
          <View style={styles.moodCard}>
            <Frown color={Theme.colors.error} size={48} />
            <Text style={styles.moodText}>Sad</Text>
          </View>
          
          <View style={styles.moodCard}>
            <Heart color={Theme.colors.love} size={48} />
            <Text style={styles.moodText}>Loved</Text>
          </View>
          
          <View style={styles.moodCard}>
            <Wind color={Theme.colors.calm} size={48} />
            <Text style={styles.moodText}>Calm</Text>
          </View>
          
          <View style={styles.moodCard}>
            <CloudRain color={Theme.colors.blue} size={48} />
            <Text style={styles.moodText}>Anxious</Text>
          </View>
        </View>
        
        <Text style={styles.journalTitle}>Journal your feelings</Text>
        <View style={styles.journalCard}>
          <Text style={styles.journalPrompt}>
            Take a moment to reflect on your emotions. What's on your mind today?
          </Text>
          <Button 
            title="Start Writing" 
            style={styles.journalButton}
          />
        </View>
        
        <Text style={styles.historyTitle}>Your Recent Moods</Text>
        <View style={styles.historyCard}>
          <View style={styles.historyItem}>
            <Smile color={Theme.colors.success} size={24} />
            <Text style={styles.historyDate}>Today</Text>
            <Text style={styles.historyMood}>Happy</Text>
          </View>
          
          <View style={styles.historyItem}>
            <Meh color={Theme.colors.warning} size={24} />
            <Text style={styles.historyDate}>Yesterday</Text>
            <Text style={styles.historyMood}>Neutral</Text>
          </View>
          
          <View style={styles.historyItem}>
            <Heart color={Theme.colors.love} size={24} />
            <Text style={styles.historyDate}>May 2</Text>
            <Text style={styles.historyMood}>Loved</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollContent: {
    padding: 16,
  },
  subtitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: Theme.colors.textPrimary,
    marginBottom: 24,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 32,
  },
  moodCard: {
    width: '30%',
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    margin: '1.66%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moodText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Theme.colors.textPrimary,
    marginTop: 8,
  },
  journalTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Theme.colors.textPrimary,
    marginBottom: 16,
  },
  journalCard: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  journalPrompt: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Theme.colors.textSecondary,
    marginBottom: 16,
  },
  journalButton: {
    alignSelf: 'flex-start',
  },
  historyTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Theme.colors.textPrimary,
    marginBottom: 16,
  },
  historyCard: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  historyDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Theme.colors.textSecondary,
    marginLeft: 16,
    flex: 1,
  },
  historyMood: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Theme.colors.textPrimary,
  },
});