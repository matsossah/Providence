import React from 'react';
import { StyleSheet } from 'react-native';
import SmallMuseumsList from '../../content/art/SmallMuseums';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function SmallMuseums(props) {
  return (
    <List items={SmallMuseumsList} />
  );
}

export default SmallMuseums;
