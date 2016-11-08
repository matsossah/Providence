import React from 'react';
import { StyleSheet } from 'react-native';
import UrbanList from '../../content/experiences/Urban';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Urban(props) {
  return (
    <List items={UrbanList} />
  );
}

export default Urban;
