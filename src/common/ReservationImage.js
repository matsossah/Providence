import React, { PropTypes } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import formStyles from './FormStyles';

const styles = StyleSheet.create({
  category: {
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: 200,
    height: 50,
    borderRadius: 25,
  },
  categoryImage: {
    flex: 1,
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  backdropView: {
    flex: 1,
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

function ReservationImage(props) {
  const { image, onPress, ...otherProps } = props;
  return (
    <TouchableWithoutFeedback
      {...otherProps}
      style={styles.category}
      onPress={onPress}
    >
      <View style={styles.category}>
        <Image
          style={styles.categoryImage}
          source={image}
        >
          <View style={styles.backdropView}>
            <View style={styles.button}>
              <Text style={[styles.categoryTitle, formStyles.font]}>
                MAKE A RESERVATION
              </Text>
            </View>
          </View>
        </Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

ReservationImage.propTypes = {
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

export default ReservationImage;
