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
  signupButton: {
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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      passwordConfirmation: '',
    };
    this.onSignupPress = this.onSignupPress.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordConfirmation = this.updatePasswordConfirmation.bind(this);
  }
  onSignupPress() {
    //check email format with regex
    if (this.state.password.length < 5) {
      alert("Password must be longer than 5 characters");
      return;
    }
    if (this.state.password !== this.state.passwordConfirmation) {
      alert("Passwords don't match");
      return;
    }
    this.setState({
      loading: true,
    });
    firebase.auth().createUserWithEmailAndPassword(this.state.email.toLowerCase(), this.state.password).catch(function(error) {
      // Handle Errors here.
      switch (error.code) {
        case "auth/email-already-in-use":
          console.log("The specified email is not a valid email.");
          return;
        case "auth/invalid-email":
          console.log("The specified email is not a valid email.");
          return;
        default:
          console.log("Error creating user:", error);
          return;
      }
    });
    Actions.home();
  }
  updateEmail(text) {
    this.setState({ email: text });
  }
  updatePassword(text) {
    this.setState({ password: text });
  }
  updatePasswordConfirmation(text) {
    this.setState({ passwordConfirmation: text });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button buttonStyle={styles.facebookButton} text={'Connect with Facebook'} textStyle={styles.facebookTextStyle} />
        <Text style={styles.separatorText}>------- Sign up with your email -------</Text>
        <TextInput
          autoCorrect={false}
          autoFocus={true}
          style={formStyles.input}
          autoCapitalize="none"
          placeholder={"Email address"}
          placeholderTextColor="#D0BA7F"
          onChangeText={this.updateEmail}
          value={this.state.email}
          returnKeyType="next"
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
          onSubmitEditing={() => {
            this.refs.ThirdInput.focus();
          }}
          returnKeyType="next"
        />
        <TextInput
          ref="ThirdInput"
          secureTextEntry
          style={formStyles.input}
          placeholder={"Password Confirmation"}
          placeholderTextColor="#D0BA7F"
            value={this.state.passwordConfirmation}
            onChangeText={this.updatePasswordConfirmation}
            onSubmitEditing={this.onSignupPress}
            returnKeyType="done"
        />
        <Button onPress={this.onLoginPress} buttonStyle={styles.signupButton} text={'SIGN UP'} textStyle={styles.loginTextStyle} />
      </View>
    );
  }
}

export default Signup;
