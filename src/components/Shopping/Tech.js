import React from 'react';
import { StyleSheet } from 'react-native';
import TechList from '../../content/shopping/Tech';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Tech(props) {
  return (
    <List items={TechList} />
  );
}

export default Tech;
