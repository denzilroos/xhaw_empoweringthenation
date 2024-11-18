import { View, Text, StyleSheet,Button } from 'react-native';
import { Link } from 'expo-router';

export default function sixweek_coursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Summary of six-week Courses</Text>
      <Text></Text>
      <Link style={styles.linkcontainer} href='./(sixweek)/childminding'>Child minding</Link>
      <Link style={styles.linkcontainer} href='./(sixweek)/cooking'>Cooking</Link>
      <Link style={styles.linkcontainer} href='./(sixweek)/gardenmaintenance'>Garden maintenance</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
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