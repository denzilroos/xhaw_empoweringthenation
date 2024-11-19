import { View, Text, StyleSheet,Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function contactdetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:40, fontWeight:500}}>Contact details</Text>
      <Text></Text>
      <Text>Phone number: +27 12 4567 890</Text>
      <Text>Email address: info@empoweringthenation.co.za</Text>
      <Text></Text>
      <Text>Empowering the nation branches:</Text>
       <Text>Morningside Branch</Text>
       <Text>223 Rivonia Road, Longdon Ave, Morningside</Text>
       <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -26.085259, 
            longitude: 28.059474, 
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: -26.085259, longitude: 28.059474 }}
            title="Our Business Location"
            description="Visit us here!"
          />

        </MapView>
        </View>
        <Text>Randburg Branch</Text>
        <Text>290 Oak Ave, Ferndale, Randburg</Text>
        <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -26.096157, 
            longitude: 28.001457,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: -26.096157, longitude: 28.001457 }}
            title="Our Business Location"
            description="Visit us here!"
          />
        </MapView>
        </View>

        <Text>Sunninghill Branch</Text>
        <Text>69 Nanyuki Rd, Sunninghill, Johannesburg</Text>
        <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -26.034068, 
            longitude: 28.069733,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: -26.034068, longitude: 28.069733 }}
            title="Our Business Location"
            description="Visit us here!"
          />
        </MapView>
        </View>

      </View>
     
      
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding:20
  },
 
  mapContainer: {
    height: 100,
    margin: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    
  },
  map: {
    flex: 1,
  },
});