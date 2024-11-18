import { View, Text, StyleSheet,Button,Image } from 'react-native';
import { Link } from 'expo-router';

export default function sewingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
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

     <Image source={{uri:'https://www.freepik.com/free-photo/two-african-dressmaker-woman-sews-clothes-sewing-machine-tailor-office-black-seamstress-girls_29371239.htm#fromView=search&page=1&position=12&uuid=09f2065b-8599-4344-8d5b-43d3cc36fc3f'}} style={styles.imgcontainer}/>
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