import React from 'react';
import { StyleSheet } from 'react-native';
import VibesList from '../../content/food/Vibes';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Vibes(props) {
  return (
    <List items={VibesList} />
  );
}

export default Vibes;
