import { View, Text, StyleSheet,Button } from 'react-native';

export default function sixmonth_coursesScreen() {
  return (
    <View style={styles.container}>
      <Text>Summary of six-month Courses</Text>
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
