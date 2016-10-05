import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import firebase from 'firebase';
import formStyles from './FormStyles';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Communications from 'react-native-communications';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: Dimensions.get('window').height / 2,
  },
  footer: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  concierge: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F9F5ED',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  options: {
    flex: 2,
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: '#F9F5ED',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  help: {
    fontSize: 14,
    marginBottom: 13,
    fontWeight: 'bold',
    color: '#D0BA7F',
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0BA7F',
    borderWidth: 1,
    borderColor: '#D0BA7F',
    width: 250,
    height: 50,
    borderRadius: 25,
  },
});

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 48.8693213,
        longitude: 2.3565518999999995,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={{latitude: 48.8693213, longitude: 2.3565518999999995}}
            title="Providence Hotel"
            description={"90 rue René Boulanger, 75010 Paris"}
          />
        </MapView>
        <View style={styles.footer}>
          <View style={styles.concierge}>
            <Image
              style={styles.image}
              source={require('../assets/concierge.png')}
            />
            <Text style={styles.help}>Hello I'm Jack, how can I help you?</Text>
          </View>
          <View style={styles.options}>
            <Button onPress={() => Communications.phonecall('+33146343404', true)} buttonStyle={styles.button} text={'CALL HOTEL DESK'} textStyle={styles.buttonText} />
            <Button onPress={() => Communications.phonecall('+33141276699', true)} buttonStyle={styles.button} text={'FIND A CAB'} textStyle={styles.buttonText} />
          </View>
        </View>
      </View>
    );
  }
}

// Login.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onLogin: PropTypes.func.isRequired,
// };

export default Help;
