import { View, Text, StyleSheet,Button } from 'react-native';

export default function contactdetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Contact details</Text>
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