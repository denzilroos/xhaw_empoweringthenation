import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function firstaidScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center'}}>First aid</Text>
      <Text>Fees: R1500 </Text>
      <Text></Text>

 <Text>Purpose: To provide first aid awareness and basic life support </Text>
 <Text></Text>
 <Text> Content: </Text>
 <Text></Text>
  
 <Text> • Wounds and bleeding </Text>
 <Text>• Burns and fractures </Text>
 <Text>• Emergency scene management </Text>
 <Text>• Cardio-Pulmonary Resuscitation CPR </Text>
 <Text>• Respiratory distress e.g., Choking, blocked airway </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
  //  alignItems:'center',
    textAlign:'left',
    margin:50
    
  },
});