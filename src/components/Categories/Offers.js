import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';
import formStyles from '../FormStyles';
import Button from '../../common/Button';
import Category from '../../common/Category';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="OOO" image={require('../../assets/experiences.png')} onPress={()=> console.log("hello")}/>
        <Category text="OOO" image={require('../../assets/shopping.png')} onPress={()=> console.log("hello")}/>
        <Category text="PPP" image={require('../../assets/food.png')} onPress={()=> console.log("hello")}/>
        <Category text="MMMM" image={require('../../assets/party.png')} onPress={()=> console.log("hello")}/>
        <Category text="KKKK" image={require('../../assets/art.png')} onPress={()=> console.log("hello")}/>
        <Category text="SSSSS" image={require('../../assets/offers.png')} onPress={()=> console.log("hello")}/>
        <Category text="QQQQ" image={require('../../assets/offers.png')} onPress={()=> console.log("hello")}/>
      </ScrollView>
    );
  }
}

// Offers.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onExperiences: PropTypes.func.isRequired,
// };

export default Offers;
