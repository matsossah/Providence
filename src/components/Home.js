import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';
import formStyles from './FormStyles';
import Button from '../common/Button';
import Category from '../common/Category';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
  wideIcon: {
    height: 30,
    width: 50,
    marginBottom: 5,
  },
  partyIcon: {
    height: 35,
    width: 35,
    marginBottom: 5,
  },
  foodIcon: {
    height: 30,
    width: 35,
    marginBottom: 5,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="EXPERIENCES" image={require('../assets/experiences.png')} icon={require('../assets/experiences_icon.png')} onPress={()=> Actions.experiences()}/>
        <Category text="SHOPPING" image={require('../assets/shopping.png')} icon={require('../assets/shopping_icon.png')} onPress={()=> Actions.shopping()}/>
        <Category text="FOOD" image={require('../assets/food.png')} icon={require('../assets/food_icon.png')} onPress={()=> Actions.food()} iconStyle={styles.foodIcon}/>
        <Category text="DRINKS & NIGHTLIFE" image={require('../assets/party.png')} icon={require('../assets/party_icon.png')} onPress={()=> Actions.party()} iconStyle={styles.partyIcon}/>
        <Category text="ART & CULTURE" image={require('../assets/art.png')} icon={require('../assets/art_icon.png')} onPress={()=> Actions.art()} iconStyle={styles.wideIcon}/>
        <Category text="EXCLUSIVE OFFERS" image={require('../assets/offers.png')} icon={require('../assets/offers_icon.png')} onPress={()=> console.log('hello')} iconStyle={styles.wideIcon}/>
      </ScrollView>
    );
  }
}

// Home.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onHome: PropTypes.func.isRequired,
// };

export default Home;
