import React from 'react';
import { StyleSheet } from 'react-native';
import PrivateList from '../../content/shopping/Private';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Private(props) {
  return (
    <List items={PrivateList} />
  );
}

export default Private;
