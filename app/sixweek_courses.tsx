import { View, Text, StyleSheet,Button,ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function sixweek_coursesScreen() {
  return (
    <View style={styles.container}>

<ImageBackground source={require('../assets/images/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebookscropsize.jpg')}style={styles.bgimgcontainer}>
      
      <View style={styles.summarycontainer}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Summary of six-week Courses</Text>
      </View>
      <Link style={styles.linkcontainer} href='./(sixweek)/childminding'>Child minding</Link>
      <Link style={styles.linkcontainer} href='./(sixweek)/cooking'>Cooking</Link>
      <Link style={styles.linkcontainer} href='./(sixweek)/gardenmaintenance'>Garden maintenance</Link>
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  summarycontainer: {
    flex: 0,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#e6ffe6',
    borderRadius:20,
    //margin:10,
    padding:20
    
  },
  linkcontainer: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    textAlign:'center',
    fontSize: 18,
    borderWidth: 4,
    borderColor: '#5c81bd',
    borderRadius: 20,
    padding:20,
    backgroundColor:'#ccf2ff',
    marginTop:20,
  },
  bgimgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'cover',
    
  }
});