import { View, Text, StyleSheet,Button } from 'react-native';
import { WebView } from 'react-native-webview';
import MapView, { Marker } from 'react-native-maps';

export default function contactdetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Contact details</Text>
      <Text>Phone number: +27 12 4567 890</Text>
      <Text>Email address: info@empoweringthenation.co.za</Text>
       <Text>Morningside Branch</Text>
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

        {/*-26.0859570, 28.0591138*/}
      </View>
     
      
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
  },
 
  mapContainer: {
    height: 200,
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