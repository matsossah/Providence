import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import firebase from 'firebase';
import formStyles from '../FormStyles';
import Button from '../../common/Button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#D0BA7F',
  },
  facebookButton: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    width: 250,
    height: 50,
    borderRadius: 25,
  },
  facebookTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorText: {
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontSize: 10,
  },
  loginButton: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D0BA7F',
    width: 250,
    height: 50,
    borderRadius: 25,
  },
  loginTextStyle: {
    color: '#D0BA7F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
    };
    this.onLoginPress = this.onLoginPress.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }
  onLoginPress() {
    this.setState({
      loading: true,
    });
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      if (error) {
        switch (error.code) {
          case "auth/wrong-password":
            console.log("The specified password is not associated with an account.");
            break;
          case "auth/user-not-found":
            console.log("The user was not found ");
            break;
          default:
            console.log("Error creating user:", error);
            break;
        }
      }
      return;
    });
    Actions.home();
  }
  updateEmail(text) {
    this.setState({ email: text });
  }
  updatePassword(text) {
    this.setState({ password: text });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button buttonStyle={styles.facebookButton} text={'Connect with Facebook'} textStyle={styles.facebookTextStyle} />
        <Text style={styles.separatorText}>------- Login with your email -------</Text>
        <TextInput
          autoCorrect={false}
          style={formStyles.input}
          autoFocus={true}
          autoCapitalize="none"
          placeholder={"Email address"}
          placeholderTextColor="#D0BA7F"
          onChangeText={this.updateEmail}
          value={this.state.email}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            this.refs.SecondInput.focus();
          }}
        />
        <TextInput
          ref="SecondInput"
          secureTextEntry
          style={formStyles.input}
          placeholder={"Password"}
          placeholderTextColor="#D0BA7F"
          onChangeText={this.updatePassword}
          value={this.state.password}
          onSubmitEditing={this.onLoginPress}
          returnKeyType="done"
        />
        <Button onPress={this.onLoginPress} buttonStyle={styles.loginButton} text={'LOGIN'} textStyle={styles.loginTextStyle} />
      </View>
    );
  }
}

// Login.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onLogin: PropTypes.func.isRequired,
// };

export default Login;
