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

class Art extends Component {
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
        <Category text="MUST SEE MUSEUMS" image={require('../../assets/museums.png')} onPress={()=> Actions.museums()}/>
        <Category text="SMALL YET AWESOME MUSEUMS" image={require('../../assets/corbusier.png')} onPress={()=> Actions.smallmuseums()}/>
        <Category text="GALLERIES" image={require('../../assets/galleries.png')} onPress={()=> Actions.galleries()}/>
        <Category text="WALKS & TALKS" image={require('../../assets/walks.png')} onPress={()=> Actions.walks()}/>
      </ScrollView>
    );
  }
}

// Art.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onExperiences: PropTypes.func.isRequired,
// };

export default Art;
