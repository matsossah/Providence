import React from 'react';
import { StyleSheet } from 'react-native';
import FoodList from '../../content/experiences/Food';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Food(props) {
  return (
    <List items={FoodList} />
  );
}

export default Food;
