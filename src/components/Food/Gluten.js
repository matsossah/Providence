import React from 'react';
import { StyleSheet } from 'react-native';
import GlutenList from '../../content/food/Gluten';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Gluten(props) {
  return (
    <List items={GlutenList} />
  );
}

export default Gluten;
