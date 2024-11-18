import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function cookingScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Cooking</Text>
      <Text></Text>
      <Text style={{ fontSize:20, fontWeight:400}}>Fees: R750 </Text>
      <Text></Text>
      <Text>Purpose:</Text><Text>To prepare and cook nutritious family meals  </Text>
      <Text></Text>
      <Text>Content:  </Text>
      <Text></Text> 
      <Text>• Nutritional requirements for a healthy body </Text>
      <Text>• Types of protein, carbohydrates and vegetables </Text>
      <Text>• Planning meals </Text>
      <Text>• Preparation and cooking of meals</Text>
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