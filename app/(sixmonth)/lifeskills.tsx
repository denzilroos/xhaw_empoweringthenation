import { View, Text, StyleSheet,Button,Image } from 'react-native';
import { Link } from 'expo-router';


export default function lifeskillsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Life skills</Text>
      <Text></Text>
     <Text style={{ fontSize:20, fontWeight:400}}> Fees: R1500 </Text>
     <Text></Text>
     <Text>Purpose:</Text><Text>To provide skills to navigate basic life necessities </Text>
     <Text></Text>
     <Text>Content:  </Text>
 <Text></Text>
     <Text>• Opening a bank account </Text>
     <Text>• Basic labour law (know your rights) </Text>
     <Text>• Basic reading and writing literacy </Text> 
     <Text>• Basic numeric literacy </Text>
     </View>

     <Image source={{uri:'https://www.freepik.com/free-photo/young-student-working-assignment_22377280.htm#fromView=search&page=4&position=44&uuid=0ec25e9a-01c1-4277-84c3-2a7cde0d9d52'}} style={styles.imgcontainer}/>
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