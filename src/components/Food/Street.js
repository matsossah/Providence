import React from 'react';
import { StyleSheet } from 'react-native';
import StreetList from '../../content/food/Street';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Street(props) {
  return (
    <List items={StreetList} />
  );
}

export default Street;
