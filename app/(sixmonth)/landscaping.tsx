import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function landscapingScreen() {
  return (
    <View style={styles.container}>
    <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Landscaping</Text>
    <Text></Text>
     <Text style={{ fontSize:20, fontWeight:400}}> Fees: R1500 </Text>
     <Text></Text>
     <Text> Purpose:</Text><Text>To provide landscaping services for new and established gardens</Text>
     <Text></Text>
     <Text> Content: </Text>
     <Text></Text>
     <Text>• Indigenous and exotic plants and trees </Text>
     <Text>• Fixed structures (fountains, statues, benches, tables, built-in braai) </Text>
     <Text>• Balancing of plants and trees in a garden </Text>
     <Text>• Aesthetics of plant shapes and colours </Text>
     <Text>• Garden layout </Text>

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