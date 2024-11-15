import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function cookingScreen() {
  return (
    <View style={styles.container}>
      <Text>Cooking</Text>
      
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