import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';
import {Tabs} from 'expo-router';

export default function sixmonth_coursesScreen() {
  return (
    <View style={styles.container}>
      <Text>Summary of six-month Courses</Text>
      <Link href='./(sixmonth)/firstaid'>First aid</Link>
      <Link href='./(sixmonth)/landscaping'>Landscaping</Link>
      <Link href='./(sixmonth)/sewing'>Sewing</Link>
      <Link href='./(sixmonth)/lifeskills'>Life skills</Link>
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
