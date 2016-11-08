import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import formStyles from '../../common/FormStyles';

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
  bar0: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  bar1: {
    height: Dimensions.get('window').height / 1.08,
    width: Dimensions.get('window').width / 1.01,
  },
  bar2: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  submit: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0BA7F',
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});


class Bar extends Component {
  render() {
    return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.body}>
          <Image style={styles.bar0} source={require('../../assets/bar0.png')} />
          <Image style={styles.bar1} source={require('../../assets/bar1.png')} />
          <Image style={styles.bar2} source={require('../../assets/bar2.png')} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => Communications.phonecall('+33146343404', true)}
      >
        <View style={styles.submit}>
          <Text style={[styles.submitText, formStyles.font]}>
            ORDER IN
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    );
  }
}

export default Bar;
