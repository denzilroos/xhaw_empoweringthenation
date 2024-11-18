import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function lifeskillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Life skills</Text>
      <Text></Text>
     <Text style={{ fontSize:20, fontWeight:400}}> Fees: R1500 </Text>
     <Text></Text>
     <Text>Purpose:</Text><Text>To provide skills to navigate basic life necessities </Text>
     <Text></Text>
     <Text>Content:  </Text>
 <Text></Text>
     <Text>• Opening a bank account </Text>
     <Text>• Basic labour law (know your rights) </Text>
     <Text>• Basic reading and writing literacy </Text> 
     <Text>• Basic numeric literacy </Text>
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