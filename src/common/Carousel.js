import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-carousel';
import Category from './Category';

const styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 24,
    color: 'blue',
  },
  image: {
    flex: 1,
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class RNCarousel extends Component {
  constructor() {
    super();
  }
  render() {
    console.log('carousel');
    return (
      <Carousel width={Dimensions.get('window').width} animate={false} hideIndicators={true}>
        <View style={styles.container}>
          <Image style={styles.image} source={this.props.firstImage} />
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/boatCruise.png')} />
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/showtime.png')} />
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/chef.png')} />
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/wine.png')} />
        </View>
      </Carousel>
    );
  }
}

RNCarousel.propTypes = {
  firstImage: PropTypes.string.isRequired,
};

export default RNCarousel;