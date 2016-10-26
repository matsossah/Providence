import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions, Linking } from 'react-native';
import firebase from 'firebase';
import formStyles from './FormStyles';
import Button from '../common/Button';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Communications from 'react-native-communications';
import Geocoder from 'react-native-geocoder';
// To call G7-->Communications.phonecall('+33141276699', true)

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
    bottom: Dimensions.get('window').height * (1 / 3),
  },
  footer: {
    position: 'absolute',
    top: Dimensions.get('window').height * (2 / 3),
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  concierge: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F4E7CD',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  options: {
    flex: 2,
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: '#F4E7CD',
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
  uberButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#17B5BB',
  },
  uberButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B2D39',
    borderWidth: 1,
    borderColor: '#0B2D39',
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
        latitudeDelta: 0.15,
        longitudeDelta: 0.15,
      },
      uberURL: 'uber://?client_id=eJCfG86Rz&action=setPickup&dropoff[latitude]=48.869321&dropoff[longitude]=2.356552&dropoff[nickname]=Hotel Providence',
      isUberInstalled: false,
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }
  componentWillMount() {
      Linking.canOpenURL(this.state.uberURL).then(isUberInstalled => {
          this.setState({ isUberInstalled: isUberInstalled });
      });
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
          {
            //<View style={styles.concierge}>
              //<Image
                //style={styles.image}
                //source={require('../assets/concierge.png')}
              ///>
              //<Text style={styles.help}>Hello I'm Jack, how can I help you?</Text>
            //</View>
          }
          <View style={styles.options}>
            <Button onPress={() => Communications.phonecall('+33146343404', true)} buttonStyle={styles.button} text={'CALL HOTEL DESK'} textStyle={styles.buttonText} />
            { (this.state.isUberInstalled) ?
                <Button onPress={() => Linking.openURL(this.state.uberURL)} buttonStyle={styles.uberButton} text={'UBER'} textStyle={styles.uberButtonText} />
              :
                <Button onPress={() => Communications.phonecall('+33141276699', true)} buttonStyle={styles.button} text={'FIND A CAB'} textStyle={styles.buttonText} />
            }
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
