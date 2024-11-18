import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button,Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
      
    <ImageBackground source={require('../assets/images/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebookscropsize.jpg')}style={styles.bgimgcontainer}>
   
    <Image source={require('../assets/images/empowering-the-nation-logo1.png')} style={styles.imgcontainer}/>
      
      
      <View style={styles.summarycontainer}>
      <Text>Empowering the Nation was established in 2018 and offers courses in Johannesburg. 
Hundreds of domestic workers and gardeners have been trained on both the six-month long 
Learnerships and six-week Short Skills Training Programmes to empower themselves and 
can provide more marketable skills.  </Text>
</View>

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
  summarycontainer: {
    flex: 0,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#e6ffe6',
    borderRadius:20,
    margin:10,
    padding:20
    
  },

  linkcontainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:50,
    textAlign:'center',
    fontSize: 18,
    borderWidth: 4,
    borderColor: '#5c81bd',
    borderRadius: 20,
    padding:10,
    backgroundColor:'#ccf2ff',
    marginBottom:20,
    
    
  },  

imgcontainer: {
  flex: 0.4,
  justifyContent:'center',
 // alignItems: 'center',
  resizeMode:'center',
  //borderWidth: 4,
 // borderColor: '#20232a',
  //borderRadius: 20,
  
  
},

bgimgcontainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  resizeMode:'cover'
}
});

