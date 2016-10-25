import React, { PropTypes } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  item: {
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
  },
  itemImage: {
    flex: 1,
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 3,
  },
  address: {
    color: 'white',
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 5,
  },
  icon: {
    height: 30,
    width: 30,
    marginBottom: 5,
  },
  backdropView: {
    flex: 1,
    flexDirection: 'row',
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomColor: '#D0BA7F',
    borderBottomWidth: 2,
  },
  infoBox: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  priceBox: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  price: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    marginBottom: 5,
  }
});

function ListItem(props) {
  const { image, title, address, price, onPress, icon, iconStyle, ...otherProps } = props;
  return (
    <TouchableWithoutFeedback
      {...otherProps}
      style={styles.item}
      onPress={onPress}
    >
      <View style={styles.item}>
        <Image
          style={styles.itemImage}
          source={image}
        >
          <View style={styles.backdropView}>
            <View style={styles.infoBox}>
            {icon && <Image style={[styles.icon].concat(iconStyle)} source={icon} />}
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.address}>{address}</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>
        </Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

export default ListItem;
