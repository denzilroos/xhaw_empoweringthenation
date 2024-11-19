import { View, Text, StyleSheet,Image } from 'react-native';



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

     <Image source={{uri:'https://img.freepik.com/free-photo/two-african-dressmaker-woman-sews-clothes-sewing-machine-tailor-office-black-seamstress-girls_627829-13693.jpg?t=st=1731928364~exp=1731931964~hmac=3a98d2382f9250eb4e14baf3a7e2f9e852dc52f8908b654d4d02fe0d50766cec&w=996'}} style={styles.imgcontainer}/>
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