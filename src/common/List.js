import React, { Component, PropTypes } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ListItem from './ListItem';
import { Actions } from 'react-native-router-flux';

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
    return items.map(function(item, key) {
      return(
        <ListItem title={item.title} key={key} price={item.price_tag} address={item.address} image={item.image} onPress={()=> Actions.show({item: item})}/>
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
