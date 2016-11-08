import React from 'react';
import { StyleSheet } from 'react-native';
import ChocolatesList from '../../content/food/Chocolates';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Chocolates(props) {
  return (
    <List items={ChocolatesList} />
  );
}

export default Chocolates;
