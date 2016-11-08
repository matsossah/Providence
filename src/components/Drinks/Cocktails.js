import React from 'react';
import { StyleSheet } from 'react-native';
import CocktailsList from '../../content/drinks/Cocktails';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Cocktails(props) {
  return (
    <List items={CocktailsList} />
  );
}

export default Cocktails;
