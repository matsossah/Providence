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

class Food extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="AWESOME CHEFS" image={require('../../assets/chef.png')} onPress={()=> Actions.chefs()}/>
        <Category text="GREAT VIBES" image={require('../../assets/vibes.png')} onPress={()=> Actions.vibes()}/>
        <Category text="SEAFOOD" image={require('../../assets/seafood.png')} onPress={()=> Actions.seafood()}/>
        <Category text="GLUTEN FREE" image={require('../../assets/gluten.png')} onPress={()=> Actions.gluten()}/>
        <Category text="STREET FOOD" image={require('../../assets/street.png')} onPress={()=> Actions.street()}/>
        <Category text="PASTRIES" image={require('../../assets/eclair.png')} onPress={()=> Actions.pastries()}/>
        <Category text="CHOCOLATES" image={require('../../assets/chocolates.png')} onPress={()=> Actions.chocolates()}/>
      </ScrollView>
    );
  }
}

export default Food;
