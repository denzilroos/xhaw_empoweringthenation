import { View, Text, StyleSheet,Button,Image } from 'react-native';
import { Link } from 'expo-router';

export default function cookingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentcontainer}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Cooking</Text>
      <Text></Text>
      <Text style={{ fontSize:20, fontWeight:400}}>Fees: R750 </Text>
      <Text></Text>
      <Text>Purpose:</Text><Text>To prepare and cook nutritious family meals  </Text>
      <Text></Text>
      <Text>Content:  </Text>
      <Text></Text> 
      <Text>• Nutritional requirements for a healthy body </Text>
      <Text>• Types of protein, carbohydrates and vegetables </Text>
      <Text>• Planning meals </Text>
      <Text>• Preparation and cooking of meals</Text>
      </View>

      <Image source={{uri:'https://img.freepik.com/free-photo/chef-with-apron-cooking-dish-kitchen_23-2148763125.jpg?t=st=1731928500~exp=1731932100~hmac=ac11e483dbb95de7f14e7a6aed4d0d95511a2bc58f9e008dc97e6216e3014dec&w=900'}} style={styles.imgcontainer}/>
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