import { View, Text, StyleSheet,Image } from 'react-native';



export default function landscapingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
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

     <Image source={{uri:'https://img.freepik.com/free-photo/smiling-afro-gardener-using-hedge-trimmer-cutting-bushes_651396-1479.jpg?t=st=1731927928~exp=1731931528~hmac=ade1e0874323475089a3c74b4ab682ebbff83a966d437cf8f39e3796f168ef31&w=996'}} style={styles.imgcontainer}/>

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