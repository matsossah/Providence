import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F5ED',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 1.3,
    width: Dimensions.get('window').width,
  },
});

class About extends Component {
  render() {
    return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.body}>
          <Image style={styles.image} source={require('../../assets/about1.png')} />
          <Image style={styles.image} source={require('../../assets/about2.png')} />
        </View>
      </ScrollView>
    </View>
    );
  }
}

export default About;
