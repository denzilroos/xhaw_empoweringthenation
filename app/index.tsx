import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button,Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/empowering-the-nation-logo1.png')}style={styles.bgimgcontainer}>
   
      
      <Image source={require('../assets/images/empowering-the-nation-logo1.png')} style={styles.imgcontainer}/>
      

      <Link style={styles.linkcontainer} href="/sixmonth_courses">Six month courses</Link>
      <Link style={styles.linkcontainer} href="/sixweek_courses">Six week courses</Link>
      <Link style={styles.linkcontainer} href="/calculatefees">Calculate fees</Link>
      <Link style={styles.linkcontainer} href="/contactdetail">Contact details</Link>

      
      
    
    </ImageBackground>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#20232a'
    
  },

  linkcontainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:50,
    textAlign:'center',
    fontSize: 18,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 20,
    padding:20,
    backgroundColor:'#ccf2ff',
    marginBottom:20
    
  },  

imgcontainer: {
  flex: 1,
  justifyContent:'center',
  alignItems: 'center',
  resizeMode:'center',
  
},

bgimgcontainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  resizeMode:'cover'
}
});

