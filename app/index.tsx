import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button,Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
    
    <View >
     
     

      <Text style={styles.headingcontainer}><Image source={require('../assets/images/empowering-the-nation-logo1.png')} /></Text>
      
      <Link style={styles.linkcontainer} href="/sixmonth_courses">Six month courses</Link>
      <Link style={styles.linkcontainer} href="/sixweek_courses">Six week courses</Link>
      <Link style={styles.linkcontainer} href="/calculatefees">Calculate fees</Link>
      <Link style={styles.linkcontainer} href="/contactdetail">Contact details</Link>

     
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },

  linkcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:50,
    textAlign:'center',
    fontSize: 24,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    padding:50,
    backgroundColor:'#ccf2ff'
    
  },  

  headingcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    
  },  

imgcontainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  resizeMode: 'contain'
  
}
});

