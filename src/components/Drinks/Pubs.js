import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';
import formStyles from '../FormStyles';
import Button from '../../common/Button';
import { Actions } from 'react-native-router-flux';
import PubsList from '../../content/drinks/Pubs';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class Pubs extends Component {
  render() {
    return (
      <List items={PubsList} />
    );
  }
}

// Pubs.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onExperiences: PropTypes.func.isRequired,
// };

export default Pubs;
