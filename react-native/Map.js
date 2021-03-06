// Main.js

import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
	container: {
		 ...StyleSheet.absoluteFillObject,
   		 justifyContent: 'flex-end',
   		 alignItems: 'center',
		 flex: 1
	},
map: {
		...StyleSheet.absoluteFillObject,
	},
});

export default class Map extends React.Component {
 	render() { 
		return (
  		<View style={styles.container}>
	     <MapView style={styles.map}
           initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
           }}>
		 </MapView>
	   </View>
	   );
	}
}
