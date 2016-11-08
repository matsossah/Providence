import React from 'react';
import { StyleSheet } from 'react-native';
import ConceptList from '../../content/shopping/Concept';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Concept(props) {
  return (
    <List items={ConceptList} />
  );
}

export default Concept;
