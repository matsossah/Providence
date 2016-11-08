import React, { Component } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import Category from '../../common/Category';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class HotelInfo extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="ABOUT US" image={require('../../assets/about.png')} textStyle={{fontSize: 22}} style={{height: Dimensions.get('window').height / 2.13}} onPress={()=> Actions.about()}/>
        <Category text="BAR & RESTAURANT" image={require('../../assets/bar.png')} textStyle={{fontSize: 22}} style={{height: Dimensions.get('window').height / 2.13}} onPress={()=> Actions.bar()}/>
      </ScrollView>
    );
  }
}

export default HotelInfo;
