import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Category from '../common/Category';
import formStyles from '../common/FormStyles';
import DatePicker from 'react-native-datepicker';
import Communications from 'react-native-communications';
import dismissKeyboard from 'dismissKeyboard';


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D0BA7F',
    marginTop: 30,
    marginBottom: 20,
  },
  options: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  submit: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ce9402',
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
  number: {
    fontSize: 18,
    color: '#F9F5ED',
    fontWeight: 'bold',
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F9F5ED',
  },
});

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      datetime: '',
      name: '',
      attendees: '',
      dateColor: '#D0BA7F',
    };

    this.renderOptions = this.renderOptions.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  updateName(text) {
    this.setState({ name: text });
  }
  handleKeyDown(e) {
    if(e.nativeEvent.key === "Enter"){
        dismissKeyboard();
    }
  }
  renderOptions(options) {
    return options.map(function(option) {
      if (this.state.attendees === option) {
        return(
          <TouchableWithoutFeedback style={styles.selectedOption} onPress={() => {this.setState({attendees: option});}}>
            <View style={styles.selectedOption}>
              <Text style={[styles.number, formStyles.font]}>{option}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      } else {
        return(
          <TouchableWithoutFeedback style={styles.option} onPress={() => {this.setState({attendees: option});}}>
            <View style={styles.option}>
              <Text style={[styles.number, formStyles.font]}>{option}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      }
    }.bind(this));
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Text style={[styles.section, formStyles.font]}>Please enter a reservation name</Text>
            <TextInput
              multiline={true}
              autoCorrect={false}
              style={formStyles.reservationInput}
              color="#D0BA7F"
              placeholder={"Your name"}
              placeholderTextColor="rgba(208,186,127, 0.6)"
              onChangeText={this.updateName}
              value={this.state.name}
              returnKeyType="done"
              onKeyPress={this.handleKeyDown}
            />
            <Text style={[styles.section, formStyles.font]}>Please select the number of attendees</Text>
            <View style={styles.options}>
              {this.renderOptions([1, 2, 3, 4, 5, 6, 7, 8])}
            </View>
            <Text style={[styles.section, formStyles.font]}>Please select a date and time</Text>
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
                  borderColor: this.state.dateColor,
                  backgroundColor: '#F9F5ED',
                  height: 50,
                  marginTop: 20
                },
                dateText: {
                  color: this.state.dateColor,
                  fontSize: 20,
                  fontWeight: 'bold'
                },
              }}
              onDateChange={(datetime) => {this.setState({datetime: datetime, dateColor: '#ce9402'});}}
            />
          </View>
        </ScrollView>
        {this.state.attendees !== '' && this.state.dateColor !== '#D0BA7F' && this.state.name !== '' &&
          <TouchableOpacity
            style={styles.submit}
            onPress={() => Communications.text('0660492163', 'RESERVATION\n' + this.props.item.name + '\nName: ' + this.state.name +'\nAttendees: ' + this.state.attendees + '\nTime: ' + this.state.datetime)}
          >
            <View style={styles.submit}>
              <View style={styles.backdropView}>
                <Text style={[styles.submitText, formStyles.font]}>
                  SUBMIT
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

Reservation.propTypes = {
  item: PropTypes.any.isRequired,
};

export default Reservation;
