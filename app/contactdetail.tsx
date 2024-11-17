import { View, Text, StyleSheet,Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function contactdetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Contact details</Text>
      
      <MapView style={styles.map} />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});