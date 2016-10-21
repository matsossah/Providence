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

class Experiences extends Component {
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
        <Category text="WOW EFFECT" image={require('../../assets/wow.png')} onPress={()=> Actions.wow()}/>
        <Category text="FOOD LOVERS" image={require('../../assets/food-lover.png')} onPress={()=> Actions.foodLovers()}/>
        <Category text="URBAN & UNDERGROUND" image={require('../../assets/urban.png')} onPress={()=> Actions.urban()}/>
        <Category text="SHOW TIME" image={require('../../assets/showtime.png')} onPress={()=> Actions.showtime()}/>
      </ScrollView>
    );
  }
}

// Experiences.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onExperiences: PropTypes.func.isRequired,
// };

export default Experiences;
