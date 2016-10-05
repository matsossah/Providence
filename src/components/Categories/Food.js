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

class Food extends Component {
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
        <Category text="AWESOME CHEFS" image={require('../../assets/chef.png')} onPress={()=> Actions.chefs()}/>
        <Category text="GREAT VIBES" image={require('../../assets/vibes.png')} onPress={()=> Actions.vibes()}/>
        <Category text="SEAFOOD" image={require('../../assets/seafood.png')} onPress={()=> Actions.seafood()}/>
        <Category text="GLUTEN FREE" image={require('../../assets/gluten.png')} onPress={()=> Actions.gluten()}/>
        <Category text="STREET FOOD" image={require('../../assets/street.png')} onPress={()=> Actions.street()}/>
        <Category text="PASTRIES" image={require('../../assets/pastries.png')} onPress={()=> Actions.pastries()}/>
        <Category text="CHOCOLATES" image={require('../../assets/chocolates.png')} onPress={()=> Actions.chocolates()}/>
      </ScrollView>
    );
  }
}

// Food.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onExperiences: PropTypes.func.isRequired,
// };

export default Food;
