import React from 'react';
import { StyleSheet } from 'react-native';
import PastriesList from '../../content/food/Pastries';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Pastries(props) {
  return (
    <List items={PastriesList} />
  );
}

export default Pastries;
