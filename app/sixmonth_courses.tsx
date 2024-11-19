import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import { Link } from 'expo-router';


export default function sixmonth_coursesScreen() {
  return (
    <View style={styles.container}>

<ImageBackground source={require('../assets/images/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebookscropsize.jpg')}style={styles.bgimgcontainer}>

<View style={styles.summarycontainer}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Summary of six-month Courses</Text>
      </View>
      <Text></Text>
      <Link style={styles.linkcontainer} href='./(sixmonth)/firstaid'>First aid</Link>
      <Link style={styles.linkcontainer} href='./(sixmonth)/landscaping'>Landscaping</Link>
      <Link style={styles.linkcontainer} href='./(sixmonth)/sewing'>Sewing</Link>
      <Link style={styles.linkcontainer} href='./(sixmonth)/lifeskills'>Life skills</Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },
  summarycontainer: {
    flex: 0,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#e6ffe6',
    borderRadius:20,
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
  },
  bgimgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'cover',
    
  }
});
