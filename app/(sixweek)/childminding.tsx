import { View, Text, StyleSheet,Button,Image } from 'react-native';
import { Link } from 'expo-router';

export default function childmindingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Child minding</Text>
      <Text></Text>
      <Text style={{ fontSize:20, fontWeight:400}}>Fees: R750 </Text>
      <Text></Text>
      <Text>Purpose:</Text><Text>To provide basic child and baby care</Text>   
      <Text></Text>
      <Text>Content: </Text>
      <Text></Text>
      <Text>• birth to six-month old baby needs </Text>
      <Text>• seven-month to one year old needs</Text> 
      <Text>• Toddler needs </Text>
      <Text>• Educational toys </Text>
      </View>

      <Image source={{uri:'https://img.freepik.com/free-photo/young-child-with-autism-playing-with-family_23-2151241990.jpg?t=st=1731928465~exp=1731932065~hmac=4a6968f7a69b357008b775ee3426274134eff6bf3fc7951be6ad3937c29824ae&w=996'}} style={styles.imgcontainer}/>
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