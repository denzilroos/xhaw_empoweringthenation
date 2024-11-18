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

      <Image source={{uri:'https://www.freepik.com/free-photo/chef-with-apron-cooking-dish-kitchen_11228868.htm#fromView=search&page=13&position=15&uuid=be4c1b08-5941-4b8a-a1a5-bb7c16f9cd89'}} style={styles.imgcontainer}/>
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