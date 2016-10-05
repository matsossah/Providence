import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Signup from './Signup';
import Login from './Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0BA7F',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  imageBox: {
    flex: 2,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  login: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  label: {
    fontSize: 12,
    color: '#D0BA7F',
    fontWeight: 'bold',
  },
  button: {
    width: 130,
    height: 35,
    borderWidth: 2,
    borderRadius: 17.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotel: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 25,
    marginBottom: 15,
    width: 220,
    height: 220,
    borderRadius: 110,
  },
});

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>H  Ô  T  E  L</Text>
          <Text style={styles.hotel}>P R O V I D E N C E</Text>
          <Text style={styles.text}>P  A  R  I  S</Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('../../assets/badge.png')}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.login}>
            <TouchableOpacity style={styles.button} onPress={Actions.login}>
              <Text style={styles.label}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signup}>
            <TouchableOpacity style={styles.button} onPress={Actions.signup}>
              <Text style={styles.label}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
