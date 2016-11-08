import React from 'react';
import { StyleSheet } from 'react-native';
import MuseumsList from '../../content/art/Museums';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Museums(props) {
  return (
    <List items={MuseumsList} />
  );
}

export default Museums;
