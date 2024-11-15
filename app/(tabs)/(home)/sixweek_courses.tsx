import { View, Text, StyleSheet,Button } from 'react-native';

export default function sixweek_coursesScreen() {
  return (
    <View style={styles.container}>
      <Text>Summary of six-week Courses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});