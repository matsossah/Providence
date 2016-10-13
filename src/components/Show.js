import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ReservationImage from '../common/ReservationImage';
import Category from '../common/Category';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#F9F5ED',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F5ED',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
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
    paddingRight: 10,
    paddingBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  footer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#D0BA7F',
    fontWeight: 'bold',
  },
  subtitle: {
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

class Show extends Component {
  constructor() {
    super();
    this.state = {
      datetime: '',
    };
  }
  render() {
    return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {this.props.item.reservation ?
          <View style={styles.header}>
            <ReservationImage image={this.props.item.image} onPress={()=> Actions.reservation({item: this.props.item, title: this.props.item.title})} />
          </View>
        :
          <View style={styles.header}>
            <Category image={this.props.item.image} onPress={console.log('hello')} />
          </View>
        }
        <View style={styles.body}>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <Text style={styles.subtitle}>{this.props.item.subtitle}</Text>
          <Text style={styles.section}>* Address *</Text>
          <Text style={styles.info}>{this.props.item.address}</Text>
          <Text style={styles.section}>* Openings *</Text>
          <Text style={styles.info}>{this.props.item.opened}</Text>
          <Text style={styles.section}>* Description *</Text>
          <Text style={styles.info}>{this.props.item.description}</Text>
          <Text style={styles.section}>* Prices *</Text>
          <Text style={styles.info}>{this.props.item.price}</Text>
        </View>
      </ScrollView>
      {this.props.item.reservation && <TouchableOpacity
        style={styles.submit}
        onPress={()=> Actions.reservation({item: this.props.item, title: this.props.item.title})}
      >
        <View style={styles.submit}>
          <Text style={styles.submitText}>
            MAKE A RESERVATION
          </Text>
        </View>
      </TouchableOpacity>
      }
    </View>
    );
  }
}

Show.propTypes = {
  item: PropTypes.any.isRequired,
};

export default Show;
