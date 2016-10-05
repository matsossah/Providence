import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  options: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  option: {
    height: Dimensions.get('window').width / 6,
    width: Dimensions.get('window').width / 6,
    borderRadius: Dimensions.get('window').width / 12,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0BA7F',
  },
  selectedOption: {
    height: Dimensions.get('window').width / 6,
    width: Dimensions.get('window').width / 6,
    borderRadius: Dimensions.get('window').width / 12,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ce9402',
  },
  body: {
    paddingTop: 10,
    height: 400,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: '#D0BA7F',
    fontWeight: 'bold',
  },
  confirm: {
    fontSize: 30,
    color: '#ce9402',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 18,
    color: '#F9F5ED',
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
    fontStyle: 'italic',
    marginTop: 20,
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
});

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      datetime: '',
      attendees: '',
      dateColor: '#D0BA7F',
    };

    this.renderOptions = this.renderOptions.bind(this);
  }
  renderOptions(options) {
    return options.map(function(option) {
      if (this.state.attendees === option) {
        return(
          <TouchableWithoutFeedback style={styles.selectedOption} onPress={() => {this.setState({attendees: option});}}>
            <View style={styles.selectedOption}>
              <Text style={styles.number}>{option}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      } else {
        return(
          <TouchableWithoutFeedback style={styles.option} onPress={() => {this.setState({attendees: option});}}>
            <View style={styles.option}>
              <Text style={styles.number}>{option}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      }
    }.bind(this));
  }
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Category image={this.props.item.image} text={this.props.item.name} />
          </View>
          <View style={styles.body}>
            <Text style={styles.section}>Please select the number of attendees</Text>
            <View style={styles.options}>
              {this.renderOptions([1, 2, 3, 4, 5, 6, 7, 8])}
            </View>
            <Text style={styles.section}>Please select a date and time</Text>
            <DatePicker
              style={{width: 250}}
              date={this.state.datetime}
              mode="datetime"
              format="YYYY-MM-DD HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderColor: '#D0BA7F',
                  backgroundColor: this.state.dateColor,
                  height: 50,
                  marginTop: 70,
                },
                 btnTextText: {
                  fontSize: 16,
                  color: '#D0BA7F'
                },
                dateText: {
                  color: '#F9F5ED',
                  fontSize: 20,
                  fontWeight: 'bold'
                },
              }}
              onDateChange={(datetime) => {this.setState({datetime: datetime, dateColor: '#ce9402'});}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

Reservation.propTypes = {
  item: PropTypes.any.isRequired,
};

export default Reservation;
