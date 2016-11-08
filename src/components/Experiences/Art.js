import React from 'react';
import { StyleSheet } from 'react-native';
import ArtList from '../../content/experiences/Art';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Art(props) {
  return (
    <List items={ArtList} />
  );
}

export default Art;
