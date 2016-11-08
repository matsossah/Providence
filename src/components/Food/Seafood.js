import React from 'react';
import { StyleSheet } from 'react-native';
import SeafoodList from '../../content/food/Seafood';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Seafood(props) {
  return (
    <List items={SeafoodList} />
  );
}

export default Seafood;
