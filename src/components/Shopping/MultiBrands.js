import React from 'react';
import { StyleSheet } from 'react-native';
import MultiBrandsList from '../../content/shopping/MultiBrands';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function MultiBrands(props) {
  return (
    <List items={MultiBrandsList} />
  );
}

export default MultiBrands;
