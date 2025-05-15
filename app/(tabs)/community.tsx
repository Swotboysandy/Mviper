import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/Theme';
import { Search, MessageCircle, Heart, Share2, Send } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader';

type Post = {
  id: number;
  author: {
    name: string;
    avatar: string;
    title?: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
  liked: boolean;
};

const communityPosts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Emma Watson',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Meditation Expert'
    },
    content: 'Just finished a 30-day meditation challenge! My focus has improved dramatically and I feel much more present throughout the day. Has anyone else noticed similar benefits?',
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes: 42,
    comments: 8,
    timeAgo: '2 hours ago',
    liked: true,
  },
  {
    id: 2,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    content: 'I\'ve been struggling with my evening routine lately. Anyone have tips for winding down after a stressful day? Looking for ideas beyond the usual "no screens before bed" advice.',
    likes: 15,
    comments: 23,
    timeAgo: '5 hours ago',
    liked: false,
  },
  {
    id: 3,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Wellness Coach'
    },
    content: 'Just published a new guided meditation for anxiety relief in the resources section. It\'s a 10-minute practice that you can do anywhere when you\'re feeling overwhelmed. Hope it helps someone today! 💙',
    image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes: 78,
    comments: 12,
    timeAgo: '1 day ago',
    liked: false,
  },
];

export default function CommunityScreen() {
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
        <ScreenHeader title="Community Chat" />
        
        <View style={styles.searchContainer}>
          <Search size={20} color={Theme.colors.textSecondary} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations..."
            placeholderTextColor={Theme.colors.placeholder}
          />
        </View>
        
        <View style={styles.createPostCard}>
          <View style={styles.createPostHeader}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
              style={styles.userAvatar}
            />
            <TextInput
              style={styles.createPostInput}
              placeholder="Share something with the community..."
              placeholderTextColor={Theme.colors.placeholder}
              multiline
            />
          </View>
          <View style={styles.createPostActions}>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Community Posts</Text>
        
        {communityPosts.map(post => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image 
                source={{ uri: post.author.avatar }}
                style={styles.postAvatar}
              />
              <View style={styles.postAuthorInfo}>
                <Text style={styles.postAuthorName}>{post.author.name}</Text>
                {post.author.title && (
                  <Text style={styles.postAuthorTitle}>{post.author.title}</Text>
                )}
                <Text style={styles.postTimeAgo}>{post.timeAgo}</Text>
              </View>
            </View>
            
            <Text style={styles.postContent}>{post.content}</Text>
            
            {post.image && (
              <Image 
                source={{ uri: post.image }}
                style={styles.postImage}
                resizeMode="cover"
              />
            )}
            
            <View style={styles.postStats}>
              <View style={styles.postStat}>
                <Heart 
                  size={16} 
                  color={post.liked ? Theme.colors.love : Theme.colors.textSecondary}
                  fill={post.liked ? Theme.colors.love : 'transparent'}
                />
                <Text style={styles.postStatText}>{post.likes}</Text>
              </View>
              
              <View style={styles.postStat}>
                <MessageCircle size={16} color={Theme.colors.textSecondary} />
                <Text style={styles.postStatText}>{post.comments}</Text>
              </View>
            </View>
            
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.postAction}>
                <Heart 
                  size={20} 
                  color={post.liked ? Theme.colors.love : Theme.colors.textSecondary}
                  fill={post.liked ? Theme.colors.love : 'transparent'}
                />
                <Text 
                  style={[
                    styles.postActionText,
                    post.liked && { color: Theme.colors.love }
                  ]}
                >
                  Like
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.postAction}>
                <MessageCircle size={20} color={Theme.colors.textSecondary} />
                <Text style={styles.postActionText}>Comment</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.postAction}>
                <Share2 size={20} color={Theme.colors.textSecondary} />
                <Text style={styles.postActionText}>Share</Text>
              </TouchableOpacity>
            </View>
            
            {post.comments > 0 && (
              <TouchableOpacity style={styles.viewCommentsButton}>
                <Text style={styles.viewCommentsText}>
                  View {post.comments} {post.comments === 1 ? 'comment' : 'comments'}
                </Text>
              </TouchableOpacity>
            )}
            
            <View style={styles.addCommentContainer}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={styles.commentAvatar}
              />
              <TextInput
                style={styles.commentInput}
                placeholder="Write a comment..."
                placeholderTextColor={Theme.colors.placeholder}
              />
              <TouchableOpacity style={styles.sendButton}>
                <Send size={20} color={Theme.colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    color: Theme.colors.textPrimary,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  createPostCard: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  createPostHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  createPostInput: {
    flex: 1,
    minHeight: 60,
    color: Theme.colors.textPrimary,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  postButton: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  postButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Theme.colors.white,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Theme.colors.textPrimary,
    marginBottom: 16,
  },
  postCard: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  postAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  postAuthorInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  postAuthorName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Theme.colors.textPrimary,
  },
  postAuthorTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.textSecondary,
  },
  postTimeAgo: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Theme.colors.textTertiary,
    marginTop: 2,
  },
  postContent: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: Theme.colors.textPrimary,
    lineHeight: 22,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  postStats: {
    flexDirection: 'row',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  postStatText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.textSecondary,
    marginLeft: 4,
  },
  postActions: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  postActionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Theme.colors.textSecondary,
    marginLeft: 4,
  },
  viewCommentsButton: {
    paddingVertical: 12,
  },
  viewCommentsText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Theme.colors.textSecondary,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  commentInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    paddingHorizontal: 16,
    color: Theme.colors.textPrimary,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginRight: 8,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});