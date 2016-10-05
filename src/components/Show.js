import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ReservationImage from '../common/ReservationImage';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#F9F5ED',
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  body: {
    paddingLeft: 10,
    paddingTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  footer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: '#D0BA7F',
    fontWeight: 'bold',
  },
  type: {
    fontSize: 12,
    color: '#D0BA7F',
  },
  info: {
    fontSize: 14,
    color: '#D0BA7F',
  },
  section: {
    fontSize: 16,
    color: '#D0BA7F',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    width: 130,
    height: 35,
    borderWidth: 2,
    borderRadius: 17.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotel: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

class Show extends Component {
  constructor() {
    super();
    this.state = {
      datetime: '',
    };
  }
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ReservationImage image={this.props.item.image} onPress={()=> Actions.reservation({item: this.props.item})} />
        </View>
        <View style={styles.body}>
          <Text style={styles.name}>{this.props.item.name}</Text>
          <Text style={styles.type}>{this.props.item.type}</Text>
          <Text style={styles.section}>* Address *</Text>
          <Text style={styles.info}>{this.props.item.address}</Text>
          <Text style={styles.section}>* Openings *</Text>
          <Text style={styles.info}>{this.props.item.Opened}</Text>
          <Text style={styles.section}>* Description *</Text>
          <Text style={styles.info}>{this.props.item.description}</Text>
          <Text style={styles.section}>* À la carte *</Text>
          <Text style={styles.info}>Starter from {this.props.item.starter}</Text>
          <Text style={styles.info}>Main course from {this.props.item.main}</Text>
          <Text style={styles.info}>Dessert from {this.props.item.dessert}</Text>
        </View>
      </ScrollView>
    );
  }
}

Show.propTypes = {
  item: PropTypes.any.isRequired,
};

export default Show;
