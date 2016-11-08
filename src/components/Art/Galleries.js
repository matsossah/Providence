import React from 'react';
import { StyleSheet } from 'react-native';
import GalleriesList from '../../content/art/Galleries';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Galleries(props) {
  return (
    <List items={GalleriesList} />
  );
}

export default Galleries;
