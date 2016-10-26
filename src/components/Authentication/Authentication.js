import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import firebase from 'firebase';
import Signup from './Signup';
import Login from './Login';
import Button from '../../common/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
    backgroundColor: 'transparent',
  },
  hotel: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D0BA7F',
    backgroundColor: 'transparent',
  },
  backdropView: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 250,
    height: 50,
    borderRadius: 25,
  },
  signupButton: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0BA7F',
    width: 250,
    height: 50,
    borderRadius: 25,
  },
  loginText: {
    color: '#D0BA7F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// var storage = firebase.storage();
// var pathReference = storage.ref('badge.png');

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backdropView}
          source={require('../../assets/backgroundImage.png')}
        >
          <View style={styles.backdropView}>
            <View style={styles.header}>
              <Text style={styles.text}>H  Ô  T  E  L</Text>
              <Text style={styles.hotel}>P R O V I D E N C E</Text>
              <Text style={styles.text}>P  A  R  I  S</Text>
            </View>
            <View style={styles.footer}>
              <Button onPress={Actions.login} buttonStyle={styles.loginButton} text={'LOGIN'} textStyle={styles.loginText} />
              <Button onPress={Actions.signup} buttonStyle={styles.signupButton} text={'SIGNUP'} textStyle={styles.signupText} />
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

export default Home;
