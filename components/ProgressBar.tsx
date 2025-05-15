import { View, StyleSheet } from 'react-native';
import { Theme } from '@/constants/Theme';

type ProgressBarProps = {
  progress: number; // 0 to 1
  color?: string;
  height?: number;
};

export default function ProgressBar({ 
  progress, 
  color = Theme.colors.primary,
  height = 8
}: ProgressBarProps) {
  // Ensure progress is between 0 and 1
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  return (
    <View style={[styles.container, { height }]}>
      <View 
        style={[
          styles.progress, 
          { 
            width: `${clampedProgress * 100}%`,
            backgroundColor: color
          }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    flex: 1,
  },
  progress: {
    height: '100%',
  },
});