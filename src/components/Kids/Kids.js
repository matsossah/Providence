import React from 'react';
import { StyleSheet } from 'react-native';
import KidsList from '../../content/Kids/Kids';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Kids(props) {
  return (
    <List items={KidsList} />
  );
}

export default Kids;
