import React from 'react';
import { StyleSheet } from 'react-native';
import ShowtimeList from '../../content/experiences/Showtime';
import List from '../../common/List';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

function Showtime(props) {
  return (
    <List items={ShowtimeList} />
  );
}

export default Showtime;
