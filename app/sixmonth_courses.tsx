import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';
import {Tabs} from 'expo-router';

export default function sixmonth_coursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Summary of six-month Courses</Text>
      <Text></Text>
      <Link style={styles.linkcontainer} href='./(sixmonth)/firstaid'>First aid</Link>
      <Link style={styles.linkcontainer} href='./(sixmonth)/landscaping'>Landscaping</Link>
      <Link style={styles.linkcontainer} href='./(sixmonth)/sewing'>Sewing</Link>
      <Link style={styles.linkcontainer} href='./(sixmonth)/lifeskills'>Life skills</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
    alignItems: 'center',
  },
  linkcontainer: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:50,
    textAlign:'center',
    fontSize: 18,
    borderWidth: 4,
    borderColor: '#5c81bd',
    borderRadius: 20,
    padding:20,
    backgroundColor:'#ccf2ff',
    marginBottom:20,
  }
});
