import React from 'react';
import { StyleSheet } from 'react-native';
import WalksList from '../../content/art/Walks';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Walks(props) {
  return (
    <List items={WalksList} />
  );
}

export default Walks;
