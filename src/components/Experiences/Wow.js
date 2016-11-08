import React from 'react';
import { StyleSheet } from 'react-native';
import WowList from '../../content/experiences/Wow';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Wow(props) {
  return (
    <List items={WowList} />
  );
}

export default Wow;
