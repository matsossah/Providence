import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import ListItem from './ListItem';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
//email: Communications.email(to, cc, bcc, subject, body) Communications.text('0752575184', 'Reservation Test')

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#D0BA7F',
  },
});

class List extends Component {
  constructor() {
    super();

    this.renderList = this.renderList.bind(this);
  }
  renderList(items) {
    return items.map(function(item) {
      return(
        <ListItem title={item.title} price={item.price_tag} address={item.address} image={item.image} onPress={()=> Actions.show({item: item})}/>
      );
    });
  }
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {this.renderList(this.props.items)}
      </ScrollView>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
