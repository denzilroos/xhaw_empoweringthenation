import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function sixweek_coursesScreen() {
  return (
    <View style={styles.container}>
      <Text>Summary of six-week Courses</Text>
      <Link href='./(sixweek)/childminding'>Childminding</Link>
      <Link href='./(sixweek)/cooking'>Cooking</Link>
      <Link href='./(sixweek)/gardenmaintenance'>Garden maintenance</Link>
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