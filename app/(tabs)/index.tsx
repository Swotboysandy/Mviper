import { View, StyleSheet, ScrollView, Platform, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileHeader from '@/components/ProfileHeader';
import PowerMenu from '@/components/PowerMenu';
import DailyQuote from '@/components/DailyQuote';
import MediaPlayer from '@/components/MediaPlayer';
import StoryCard from '@/components/StoryCard';
import { Theme } from '@/constants/Theme';
import Button from '@/components/Button'; // Add this import
import { useRouter } from 'expo-router';   // Add this import

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter(); // Add this

  return (
    <View 
      style={[
        styles.container,
        { 
          paddingTop: Platform.OS === 'web' ? 16 : insets.top,
          paddingBottom: 80 + (insets.bottom || 0) 
        }
      ]}
    >
      {/* Add Login/Register buttons here */}
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 16 }}>
        <Button
          title="Login"
          style={{ marginRight: 8 }}
          onPress={() => router.push('/login')}
        />
        <Button
          title="Register"
          onPress={() => router.push('/register')}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ProfileHeader 
          name="Sandy" 
          date={new Date()}
        />
        
        <View style={styles.contentLayout}>
          <View style={styles.leftColumn}>
            <PowerMenu />
          </View>
          
          <View style={styles.centerColumn}>
            <MediaPlayer 
              imageUrl="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Daily Reflection"
              description="Take a moment to reflect on your day"
            />
          </View>
          
          <View style={styles.rightColumn}>
            <DailyQuote 
              quote="The only way to do great work is to love what you do."
              author="Sandy"
            />
            
            <StoryCard
              username="Troy"
              userTitle="Senior iOS II"
              imageUrl="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Story Housing"
              subtitle="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            />
          </View>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Text style={styles.copyright}>
              ©Copyright and ®Reserved by MV.co
            </Text>
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
    flexGrow: 1,
    padding: 16,
  },
  contentLayout: {
    flexDirection: 'row',
    marginTop: 16,
    flexWrap: 'wrap',
  },
  leftColumn: {
    width: '100%',
    maxWidth: 300,
    marginRight: 16,
  },
  centerColumn: {
    flex: 1,
    minWidth: 300,
    marginRight: 16,
  },
  rightColumn: {
    width: '100%',
    maxWidth: 400,
  },
  footer: {
    marginTop: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  footerContent: {
    alignItems: 'center',
  },
  copyright: {
    color: Theme.colors.textSecondary,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
});