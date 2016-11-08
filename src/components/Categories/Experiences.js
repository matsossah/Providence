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

class Experiences extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="WOW EFFECT" image={require('../../assets/wow.png')} onPress={()=> Actions.wow()}/>
        <Category text="FOOD LOVERS" image={require('../../assets/food-lover.png')} onPress={()=> Actions.foodLovers()}/>
        <Category text="URBAN & UNDERGROUND" image={require('../../assets/urban.png')} onPress={()=> Actions.urban()}/>
        <Category text="SHOW TIME" image={require('../../assets/showtime.png')} onPress={()=> Actions.showtime()}/>
      </ScrollView>
    );
  }
}

export default Experiences;
