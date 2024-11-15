import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function gardenmaintenanceScreen() {
  return (
    <View style={styles.container}>
      <Text>Garden maintenance</Text>
      
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