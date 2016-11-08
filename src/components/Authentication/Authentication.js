import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Signup from './Signup';
import Login from './Login';
import Button from '../../common/Button';
import formStyles from '../../common/FormStyles';

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
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderColor: '#D0BA7F',
    borderWidth: 1,
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
  },
  signupText: {
    color: 'white',
    fontSize: 16,
  },
});

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backdropView}
          source={require('../../assets/backgroundImage.png')}
        >
          <View style={styles.backdropView}>
            <View style={styles.header}>
              <Text style={[styles.text, formStyles.font]}>H  Ô  T  E  L</Text>
              <Text style={[styles.hotel, formStyles.font]}>P R O V I D E N C E</Text>
              <Text style={[styles.text, formStyles.font]}>P  A  R  I  S</Text>
            </View>
            <View style={styles.footer}>
              <Button onPress={Actions.login} buttonStyle={styles.loginButton} text={'LOGIN'} textStyle={[styles.loginText, formStyles.font]} />
              <Button onPress={Actions.signup} buttonStyle={styles.signupButton} text={'SIGNUP'} textStyle={[styles.signupText, formStyles.font]} />
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

export default Home;
