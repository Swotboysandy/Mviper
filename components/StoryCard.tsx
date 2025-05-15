import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/Theme';
import { MoveVertical as MoreVertical } from 'lucide-react-native';

type StoryCardProps = {
  username: string;
  userTitle?: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  content: string;
};

export default function StoryCard({ 
  username, 
  userTitle, 
  imageUrl, 
  title, 
  subtitle, 
  content 
}: StoryCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {username.charAt(0)}
            </Text>
          </View>
          <View>
            <Text style={styles.username}>{username}</Text>
            {userTitle && (
              <Text style={styles.userTitle}>{userTitle}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity>
          <MoreVertical size={20} color={Theme.colors.textSecondary} />
        </TouchableOpacity>
      </View>
      
      <Image 
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.description}>{content}</Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerButton, styles.readButton]}>
          <Text style={styles.readText}>Read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: Theme.colors.white,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  username: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: Theme.colors.textPrimary,
  },
  userTitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Theme.colors.textSecondary,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  titleRow: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Theme.colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Theme.colors.textSecondary,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  footerButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readButton: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
  },
  saveText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Theme.colors.textSecondary,
  },
  readText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Theme.colors.primary,
  },
});