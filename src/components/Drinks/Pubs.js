import React from 'react';
import { StyleSheet } from 'react-native';
import PubsList from '../../content/drinks/Pubs';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Pubs(props) {
  return (
    <List items={PubsList} />
  );
}

export default Pubs;
