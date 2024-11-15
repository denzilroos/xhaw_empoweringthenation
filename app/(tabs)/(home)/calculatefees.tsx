import { View, Text, StyleSheet,Button } from 'react-native';

export default function calculatefeesScreen() {
  return (
    <View style={styles.container}>
      <Text>Calculate total fees</Text>
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
