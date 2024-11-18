import { View, Text, StyleSheet,Button,Image } from 'react-native';
import { Link } from 'expo-router';

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

     <Image source={{uri:'https://www.freepik.com/free-photo/smiling-afro-gardener-using-hedge-trimmer-cutting-bushes_26767481.htm#fromView=search&page=12&position=34&uuid=bc527700-8bc0-4685-9edf-b0244ff88f09'}} style={styles.imgcontainer}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    //justifyContent: 'center',
    //alignItems: 'center',
    textAlign:'left',
    //borderWidth: 4,
    //borderColor: '#20232a',
    //borderRadius: 20,
    margin:20
  },
  contentcontainer: {
    flex: 1.2,
    //justifyContent: 'center',
    //alignItems: 'center',
    textAlign:'left',
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 20,
    
    padding:20
   

    //margin:20
  },
  imgcontainer: {
    flex: 0.5,
    justifyContent:'center',
    alignItems: 'center',
    resizeMode:'center',
    //borderWidth: 4,
   // borderColor: '#20232a',
   // borderRadius: 20,
    //width:400,
    //height:400
  }
});