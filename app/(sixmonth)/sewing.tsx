import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function sewingScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Sewing</Text>
      <Text></Text>
     <Text style={{ fontSize:20, fontWeight:400}}> Fees: R1500 </Text>
     <Text></Text>
     <Text>Purpose:</Text><Text>To provide alterations and new garment tailoring services   </Text>
     <Text></Text>
     <Text>Content: </Text>
     <Text></Text>
     <Text>• Types of stitches </Text>
     <Text>• Threading a sewing machine </Text>
     <Text>• Sewing buttons, zips, hems and seams </Text>
     <Text>• Alterations </Text>
     <Text>• Designing and sewing new garments </Text>
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