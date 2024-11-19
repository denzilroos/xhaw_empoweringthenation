import { View, Text, StyleSheet,Image } from 'react-native';



export default function gardenmaintenanceScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Garden maintenance</Text>
      <Text></Text>
      <Text style={{ fontSize:20, fontWeight:400}}>Fees: R750 </Text>
      <Text></Text>
      <Text>Purpose:</Text><Text>To provide basic knowledge of watering, pruning and planting in a domestic garden.  </Text>
      <Text></Text>
      <Text>Content: </Text>
      <Text></Text>
      <Text>• Water restrictions and the watering requirements of indigenous and exotic plants </Text>
      <Text>• Pruning and propagation of plants </Text>
      <Text>• Planting techniques for different plant types </Text>
      </View>
      
      <Image source={{uri:'https://img.freepik.com/free-photo/gardener-with-weedwacker-cutting-grass-garden_329181-20539.jpg?t=st=1731922527~exp=1731926127~hmac=1562fc73888b08e94e99eb3348f3facef53dcd8aa90c59829426e5732216c6bc&w=996'}} style={styles.imgcontainer}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    textAlign:'left',
    margin:20
  },
  contentcontainer: {
    flex: 1.2,
    textAlign:'left',
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 20,
    padding:20
  },
  imgcontainer: {
    flex: 0.5,
    justifyContent:'center',
    alignItems: 'center',
    resizeMode:'center',
  }
});