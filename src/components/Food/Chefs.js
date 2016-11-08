import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AwesomeChefs from '../../content/food/Chefs';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class Chefs extends Component {
  render() {
    return (
      <List items={AwesomeChefs} />
    );
  }
}

export default Chefs;

