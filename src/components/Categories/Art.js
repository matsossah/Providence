import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import formStyles from '../../common/FormStyles';
import Category from '../../common/Category';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class Art extends Component {
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Category text="MUST SEE MUSEUMS" image={require('../../assets/museums.png')} onPress={()=> Actions.museums()}/>
        <Category text="SMALL YET AWESOME MUSEUMS" image={require('../../assets/corbusier.png')} onPress={()=> Actions.smallmuseums()}/>
        <Category text="GALLERIES" image={require('../../assets/galleries.png')} onPress={()=> Actions.galleries()}/>
        <Category text="WALKS & TALKS" image={require('../../assets/walks.png')} onPress={()=> Actions.walks()}/>
      </ScrollView>
    );
  }
}

export default Art;
