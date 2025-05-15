import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { Theme } from '@/constants/Theme';
import { Play, Pause } from 'lucide-react-native';

type MediaPlayerProps = {
  imageUrl: string;
  title?: string;
  description?: string;
};

export default function MediaPlayer({ imageUrl, title, description }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      
      <View style={styles.overlay}>
        {title && description && (
          <View style={styles.textOverlay}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{description}</Text>
          </View>
        )}
        
        <TouchableOpacity 
          style={styles.playButton}
          onPress={togglePlay}
          activeOpacity={0.8}
        >
          {isPlaying ? (
            <Pause color={Theme.colors.white} size={32} />
          ) : (
            <Play color={Theme.colors.white} size={32} fill={Theme.colors.white} />
          )}
        </TouchableOpacity>
      </View>
      
      <View style={styles.controls}>
        <View style={styles.trackInfo}>
          <Text style={styles.trackTitle}>Title</Text>
          <Text style={styles.trackArtist}>Artist</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>||</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>▶</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: Theme.colors.cardBackground,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 500,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOverlay: {
    position: 'absolute',
    bottom: Platform.OS === 'web' ? 80 : 100,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Theme.colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255,255,255,0.8)',
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Theme.colors.white,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2c2c2c',
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Theme.colors.white,
  },
  trackArtist: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255,255,255,0.7)',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  controlButtonText: {
    color: Theme.colors.white,
    fontSize: 16,
  },
});