import React from 'react';
import { StyleSheet } from 'react-native';
import DesignList from '../../content/shopping/Design';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Design(props) {
  return (
    <List items={DesignList} />
  );
}

export default Design;
