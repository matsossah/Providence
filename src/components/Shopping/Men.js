import React from 'react';
import { StyleSheet } from 'react-native';
import MenList from '../../content/shopping/Men';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Men(props) {
  return (
    <List items={MenList} />
  );
}

export default Men;
