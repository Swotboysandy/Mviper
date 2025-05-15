import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/Theme';
import { SquarePen as PenSquare, Clock, Calendar, Image, Paperclip } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader';
import { format } from 'date-fns';

export default function JournalScreen() {
  const insets = useSafeAreaInsets();
  const today = new Date();
  
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
        <ScreenHeader title="Write Today's Story" />
        
        <View style={styles.journalCard}>
          <View style={styles.journalHeader}>
            <Text style={styles.date}>{format(today, 'EEEE, MMMM d, yyyy')}</Text>
            <View style={styles.timeContainer}>
              <Clock size={16} color={Theme.colors.textSecondary} />
              <Text style={styles.time}>{format(today, 'h:mm a')}</Text>
            </View>
          </View>
          
          <TextInput
            style={styles.titleInput}
            placeholder="Title your story..."
            placeholderTextColor={Theme.colors.placeholder}
          />
          
          <TextInput
            style={styles.contentInput}
            placeholder="What's on your mind today? How did your day go?"
            placeholderTextColor={Theme.colors.placeholder}
            multiline
            textAlignVertical="top"
          />
          
          <View style={styles.toolBar}>
            <TouchableOpacity style={styles.toolButton}>
              <Image size={20} color={Theme.colors.textSecondary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <Paperclip size={20} color={Theme.colors.textSecondary} />
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Entry</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.previousTitle}>Previous Entries</Text>
        
        <View style={styles.previousEntries}>
          {[
            {
              id: 1,
              title: 'Morning Reflections',
              preview: 'Today I woke up feeling refreshed and motivated...',
              date: '2 days ago'
            },
            {
              id: 2,
              title: 'Weekend Plans',
              preview: 'I\'m looking forward to hiking at the mountain trail...',
              date: '5 days ago'
            },
            {
              id: 3,
              title: 'New Project Ideas',
              preview: 'I\'ve been thinking about starting a side project...',
              date: '1 week ago'
            },
          ].map(entry => (
            <View key={entry.id} style={styles.entryCard}>
              <View style={styles.entryIconContainer}>
                <PenSquare size={20} color={Theme.colors.primary} />
              </View>
              <View style={styles.entryContent}>
                <Text style={styles.entryTitle}>{entry.title}</Text>
                <Text style={styles.entryPreview} numberOfLines={2}>
                  {entry.preview}
                </Text>
                <View style={styles.entryMetaData}>
                  <Calendar size={14} color={Theme.colors.textSecondary} />
                  <Text style={styles.entryDate}>{entry.date}</Text>
                </View>
              </View>
            </View>
          ))}
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
  journalCard: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  journalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Theme.colors.textPrimary,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.textSecondary,
    marginLeft: 4,
  },
  titleInput: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 22,
    color: Theme.colors.textPrimary,
    marginBottom: 16,
    padding: 0,
  },
  contentInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Theme.colors.textPrimary,
    minHeight: 200,
    padding: 0,
  },
  toolBar: {
    flexDirection: 'row',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
  },
  toolButton: {
    marginRight: 16,
    padding: 8,
  },
  spacer: {
    flex: 1,
  },
  saveButton: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  saveButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Theme.colors.white,
  },
  previousTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Theme.colors.textPrimary,
    marginBottom: 16,
  },
  previousEntries: {
    marginBottom: 24,
  },
  entryCard: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  entryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  entryContent: {
    flex: 1,
  },
  entryTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Theme.colors.textPrimary,
    marginBottom: 4,
  },
  entryPreview: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.textSecondary,
    marginBottom: 8,
  },
  entryMetaData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Theme.colors.textSecondary,
    marginLeft: 4,
  },
});