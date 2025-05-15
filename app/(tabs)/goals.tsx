import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from '@/constants/Theme';
import { Target, Clock, Check, Plus, ChevronRight, Circle } from 'lucide-react-native';
import ScreenHeader from '@/components/ScreenHeader';
import ProgressBar from '@/components/ProgressBar';

type Goal = {
  id: number;
  title: string;
  description: string;
  progress: number;
  tasks: Task[];
};

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const initialGoals: Goal[] = [
  {
    id: 1,
    title: 'Meditate Daily',
    description: 'Practice mindfulness for at least 10 minutes every day',
    progress: 0.7,
    tasks: [
      { id: 1, title: 'Set up meditation space', completed: true },
      { id: 2, title: 'Download meditation app', completed: true },
      { id: 3, title: 'Complete 7-day beginner course', completed: true },
      { id: 4, title: 'Practice mindful breathing', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Read 12 Books This Year',
    description: 'Expand knowledge through reading',
    progress: 0.25,
    tasks: [
      { id: 1, title: 'Create reading list', completed: true },
      { id: 2, title: 'Finish current book', completed: false },
      { id: 3, title: 'Join book club', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Improve Sleep Habits',
    description: 'Get 7-8 hours of quality sleep each night',
    progress: 0.4,
    tasks: [
      { id: 1, title: 'Set consistent sleep schedule', completed: true },
      { id: 2, title: 'Create relaxing bedtime routine', completed: false },
      { id: 3, title: 'Limit screen time before bed', completed: false },
      { id: 4, title: 'Track sleep quality', completed: true },
    ],
  },
];

export default function GoalsScreen() {
  const insets = useSafeAreaInsets();
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [expandedGoal, setExpandedGoal] = useState<number | null>(1);
  
  const toggleGoalExpand = (goalId: number) => {
    setExpandedGoal(expandedGoal === goalId ? null : goalId);
  };
  
  const toggleTaskComplete = (goalId: number, taskId: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        const updatedTasks = goal.tasks.map(task => 
          task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        
        const completedTasksCount = updatedTasks.filter(task => task.completed).length;
        const progress = completedTasksCount / updatedTasks.length;
        
        return {
          ...goal,
          tasks: updatedTasks,
          progress
        };
      }
      return goal;
    }));
  };
  
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
        <ScreenHeader title="Review Goals" />
        
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>Goals Summary</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3 Active</Text>
            </View>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Target size={20} color={Theme.colors.primary} />
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Total Goals</Text>
            </View>
            
            <View style={styles.statItem}>
              <Check size={20} color={Theme.colors.success} />
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Tasks Done</Text>
            </View>
            
            <View style={styles.statItem}>
              <Clock size={20} color={Theme.colors.warning} />
              <Text style={styles.statValue}>6</Text>
              <Text style={styles.statLabel}>Pending</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.goalsContainer}>
          <View style={styles.goalsHeader}>
            <Text style={styles.goalsTitle}>Your Goals</Text>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={20} color={Theme.colors.white} />
            </TouchableOpacity>
          </View>
          
          {goals.map(goal => (
            <View key={goal.id} style={styles.goalCard}>
              <TouchableOpacity 
                style={styles.goalHeader}
                onPress={() => toggleGoalExpand(goal.id)}
              >
                <View style={styles.goalTitleRow}>
                  <Text style={styles.goalTitle}>{goal.title}</Text>
                  <ChevronRight 
                    size={20} 
                    color={Theme.colors.textSecondary}
                    style={[
                      styles.expandIcon,
                      expandedGoal === goal.id && styles.expandIconRotated
                    ]}
                  />
                </View>
                
                <Text style={styles.goalDescription}>{goal.description}</Text>
                
                <View style={styles.progressRow}>
                  <ProgressBar progress={goal.progress} />
                  <Text style={styles.progressText}>{Math.round(goal.progress * 100)}%</Text>
                </View>
              </TouchableOpacity>
              
              {expandedGoal === goal.id && (
                <View style={styles.tasksContainer}>
                  <Text style={styles.tasksTitle}>Tasks</Text>
                  
                  {goal.tasks.map(task => (
                    <TouchableOpacity 
                      key={task.id}
                      style={styles.taskItem}
                      onPress={() => toggleTaskComplete(goal.id, task.id)}
                    >
                      {task.completed ? (
                        <Check size={20} color={Theme.colors.success} />
                      ) : (
                        <Circle size={20} color={Theme.colors.textSecondary} />
                      )}
                      <Text 
                        style={[
                          styles.taskText,
                          task.completed && styles.taskTextCompleted
                        ]}
                      >
                        {task.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
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
  summaryCard: {
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
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Theme.colors.textPrimary,
  },
  badge: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  badgeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Theme.colors.primary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Theme.colors.textPrimary,
    marginVertical: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Theme.colors.textSecondary,
  },
  goalsContainer: {
    marginBottom: 24,
  },
  goalsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  goalsTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Theme.colors.textPrimary,
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalCard: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  goalHeader: {
    padding: 16,
  },
  goalTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Theme.colors.textPrimary,
    marginBottom: 4,
  },
  expandIcon: {
    transform: [{ rotate: '0deg' }],
  },
  expandIconRotated: {
    transform: [{ rotate: '90deg' }],
  },
  goalDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.textSecondary,
    marginBottom: 12,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Theme.colors.textSecondary,
    marginLeft: 8,
    width: 40,
  },
  tasksContainer: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  tasksTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Theme.colors.textPrimary,
    marginBottom: 12,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  taskText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: Theme.colors.textPrimary,
    marginLeft: 12,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: Theme.colors.textSecondary,
  },
});