import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Category from '../../common/Category';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class Party extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="COCKTAIL BARS" image={require('../../assets/cocktail.png')} onPress={()=> Actions.cocktails()}/>
        <Category text="WINE BARS" image={require('../../assets/wine.png')} onPress={()=> Actions.wines()}/>
        <Category text="PUBS" image={require('../../assets/pub.png')} onPress={()=> Actions.pubs()}/>
        <Category text="NIGHT CLUBS" image={require('../../assets/club.png')} onPress={()=> Actions.clubs()}/>
      </ScrollView>
    );
  }
}

export default Party;
