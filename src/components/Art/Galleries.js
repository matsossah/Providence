import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';
import formStyles from '../FormStyles';
import Button from '../../common/Button';
import ListItem from '../../common/ListItem';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class Galleries extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <ListItem title="MUSEUMS" price="€€" address="95 rue Leblanc, 75015 Paris" image={require('../../assets/museums.png')} onPress={()=> console.log("hello")}/>
        <ListItem title="GALLERIES" price="€€€" address="95 rue Leblanc, 75015 Paris" image={require('../../assets/galleries.png')} onPress={()=> console.log("hello")}/>
        <ListItem title="WALKS & TALKS" price="€€" address="95 rue Leblanc, 75015 Paris" image={require('../../assets/walks.png')} onPress={()=> console.log("hello")}/>
        <ListItem title="CELEBRATIONS & FESTIVALS" price="€" address="95 rue Leblanc 75015, Paris" image={require('../../assets/festivals.png')} onPress={()=> console.log("hello")}/>
      </ScrollView>
    );
  }
}

// Galleries.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onExperiences: PropTypes.func.isRequired,
// };

export default Galleries;
