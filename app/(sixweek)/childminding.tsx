import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function childmindingScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Child minding</Text>
      <Text></Text>
      <Text style={{ fontSize:20, fontWeight:400}}>Fees: R750 </Text>
      <Text></Text>
      <Text>Purpose:</Text><Text>To provide basic child and baby care</Text>   
      <Text></Text>
      <Text>Content: </Text>
      <Text></Text>
      <Text>• birth to six-month old baby needs </Text>
      <Text>• seven-month to one year old needs</Text> 
      <Text>• Toddler needs </Text>
      <Text>• Educational toys </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    textAlign:'left',
    margin:50
  },
});