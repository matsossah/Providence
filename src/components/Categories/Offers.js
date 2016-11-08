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

class Offers extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="OOO" image={require('../../assets/experiences.png')} onPress={()=> console.log("hello")}/>
        <Category text="OOO" image={require('../../assets/shopping.png')} onPress={()=> console.log("hello")}/>
        <Category text="PPP" image={require('../../assets/food.png')} onPress={()=> console.log("hello")}/>
        <Category text="MMMM" image={require('../../assets/party.png')} onPress={()=> console.log("hello")}/>
        <Category text="KKKK" image={require('../../assets/art.png')} onPress={()=> console.log("hello")}/>
        <Category text="SSSSS" image={require('../../assets/offers.png')} onPress={()=> console.log("hello")}/>
        <Category text="QQQQ" image={require('../../assets/offers.png')} onPress={()=> console.log("hello")}/>
      </ScrollView>
    );
  }
}

export default Offers;
