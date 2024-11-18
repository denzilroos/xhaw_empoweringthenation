import { View, Text, StyleSheet,Button,Image} from 'react-native';
import { Link } from 'expo-router';


export default function firstaidScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>First aid</Text>
      <Text style={{ fontSize:20, fontWeight:400}}>Fees: R1500 </Text>
      <Text></Text>

 <Text>Purpose:</Text><Text>To provide first aid awareness and basic life support </Text>
 <Text></Text>
 <Text> Content: </Text>
 <Text></Text>
  
 <Text>• Wounds and bleeding </Text>
 <Text>• Burns and fractures </Text>
 <Text>• Emergency scene management </Text>
 <Text>• Cardio-Pulmonary Resuscitation CPR </Text>
 <Text>• Respiratory distress e.g., Choking, blocked airway </Text>
 </View>

 <Image source={{uri:'https://img.freepik.com/free-photo/people-are-practicing-medicine_1157-42457.jpg?t=st=1731927425~exp=1731931025~hmac=384a0c0edfadf3d7bb50d198836d08bfe0c83bd49f37be39d8f04e12cb97b847&w=996'}} style={styles.imgcontainer}/>
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
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 20,
    //width:400,
    //height:400
  }
});