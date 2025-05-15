import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/Theme';
import { Play, Pause, SkipForward, Timer, Clock } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader';

const meditationSessions = [
  {
    id: 1,
    title: 'Morning Calm',
    duration: '10 min',
    imageUrl: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Start your day with clarity and intention',
  },
  {
    id: 2,
    title: 'Stress Relief',
    duration: '15 min',
    imageUrl: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Let go of tension and find your center',
  },
  {
    id: 3,
    title: 'Deep Sleep',
    duration: '20 min',
    imageUrl: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Prepare your mind and body for restful sleep',
  },
  {
    id: 4,
    title: 'Focus & Clarity',
    duration: '8 min',
    imageUrl: 'https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Sharpen your attention and mental clarity',
  },
];

export default function MeditationScreen() {
  const insets = useSafeAreaInsets();
  const [selectedSession, setSelectedSession] = useState(meditationSessions[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  
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
        <ScreenHeader title="Begin Meditation" />
        
        <View style={styles.featuredContainer}>
          <Image 
            source={{ uri: selectedSession.imageUrl }}
            style={styles.featuredImage}
            resizeMode="cover"
          />
          <View style={styles.featuredOverlay}>
            <Text style={styles.featuredTitle}>{selectedSession.title}</Text>
            <Text style={styles.featuredDescription}>{selectedSession.description}</Text>
            <View style={styles.durationBadge}>
              <Clock size={14} color={Theme.colors.white} />
              <Text style={styles.durationText}>{selectedSession.duration}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.playerControls}>
          <TouchableOpacity 
            style={styles.secondaryButton}
            activeOpacity={0.7}
          >
            <Timer size={24} color={Theme.colors.textPrimary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.playButton}
            activeOpacity={0.7}
            onPress={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause size={32} color={Theme.colors.white} />
            ) : (
              <Play size={32} color={Theme.colors.white} fill={Theme.colors.white} />
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            activeOpacity={0.7}
          >
            <SkipForward size={24} color={Theme.colors.textPrimary} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Recommended Sessions</Text>
        
        <View style={styles.sessionsGrid}>
          {meditationSessions.map(session => (
            <TouchableOpacity
              key={session.id}
              style={styles.sessionCard}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedSession(session);
                setIsPlaying(false);
              }}
            >
              <Image 
                source={{ uri: session.imageUrl }}
                style={styles.sessionImage}
                resizeMode="cover"
              />
              <View style={styles.sessionInfo}>
                <Text style={styles.sessionTitle}>{session.title}</Text>
                <View style={styles.sessionDuration}>
                  <Clock size={12} color={Theme.colors.textSecondary} />
                  <Text style={styles.sessionDurationText}>{session.duration}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Daily Mindfulness Tips</Text>
        
        <View style={styles.tipsCard}>
          <Text style={styles.tipTitle}>Take Mindful Moments</Text>
          <Text style={styles.tipText}>
            Throughout your day, pause for 30 seconds to take a few deep breaths and observe your thoughts without judgment. These small pauses can reset your nervous system and improve focus.
          </Text>
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
  featuredContainer: {
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    justifyContent: 'flex-end',
  },
  featuredTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Theme.colors.white,
    marginBottom: 8,
  },
  featuredDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 12,
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  durationText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Theme.colors.white,
    marginLeft: 4,
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  secondaryButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Theme.colors.textPrimary,
    marginBottom: 16,
  },
  sessionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 32,
  },
  sessionCard: {
    width: '48%',
    marginBottom: 16,
    marginHorizontal: '1%',
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sessionImage: {
    width: '100%',
    height: 120,
  },
  sessionInfo: {
    padding: 12,
  },
  sessionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Theme.colors.textPrimary,
    marginBottom: 4,
  },
  sessionDuration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionDurationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Theme.colors.textSecondary,
    marginLeft: 4,
  },
  tipsCard: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: Theme.colors.primary,
  },
  tipTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Theme.colors.textPrimary,
    marginBottom: 8,
  },
  tipText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
});