import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '@/constants/Theme';

type DailyQuoteProps = {
  quote: string;
  author: string;
};

export default function DailyQuote({ quote, author }: DailyQuoteProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Quote</Text>
      
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{quote}"</Text>
        <Text style={styles.author}>- {author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Theme.colors.textPrimary,
    marginBottom: 16,
  },
  quoteContainer: {
    paddingVertical: 16,
  },
  quoteText: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    fontStyle: 'italic',
    color: Theme.colors.textPrimary,
    lineHeight: 28,
    marginBottom: 16,
  },
  author: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Theme.colors.textSecondary,
    textAlign: 'right',
  },
});