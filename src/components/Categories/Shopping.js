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

class Shopping extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="MULTIBRANDS" image={require('../../assets/luxury.png')} onPress={()=> Actions.multibrands()}/>
        <Category text="MEN ONLY" image={require('../../assets/men.png')} onPress={()=> Actions.men()}/>
        <Category text="CONCEPT STORES" image={require('../../assets/brokenArm.png')} onPress={()=> Actions.concept()}/>
        <Category text="TECH LOVERS" image={require('../../assets/tech.png')} onPress={()=> Actions.tech()}/>
        {
         //<Category text="PRIVATE SHOPPING" image={require('../../assets/private.png')} onPress={()=> Actions.private()}/>
         //<Category text="ART & DESIGN" image={require('../../assets/design.png')} onPress={()=> Actions.design()}/>
         //<Category text="KIDS" image={require('../../assets/kids.png')} onPress={()=> Actions.shopKids()}/>
         //<Category text="PETS" image={require('../../assets/pets.png')} onPress={()=> Actions.pets()}/>
        }
      </ScrollView>
    );
  }
}

export default Shopping;
