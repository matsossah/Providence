import React from 'react';
import { StyleSheet } from 'react-native';
import PetsList from '../../content/shopping/Pets';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Pets(props) {
  return (
    <List items={PetsList} />
  );
}

export default Pets;
