import React, { PropTypes } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  category: {
    height: Dimensions.get('window').height / 4.4,
    width: Dimensions.get('window').width,
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
  },
  categoryImage: {
    flex: 1,
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  icon: {
    height: 30,
    width: 30,
    marginBottom: 5,
  },
  backdropView: {
    flex: 1,
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

function Category(props) {
  const { image, text, onPress, icon, style, iconStyle, textStyle, ...otherProps } = props;
  return (
    <TouchableWithoutFeedback
      {...otherProps}
      style={[styles.category].concat(style)}
      onPress={onPress}
    >
      <View style={[styles.category].concat(style)}>
        <Image
          style={[styles.categoryImage].concat(style)}
          source={image}
        >
          <View style={[styles.backdropView].concat(style)}>
          {icon && <Image style={[styles.icon].concat(iconStyle)} source={icon} />}
            <Text style={[styles.categoryTitle].concat(textStyle)}>
              {text}
            </Text>
          </View>
        </Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

Category.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  iconStyle: PropTypes.any,
  textStyle: PropTypes.any,
  style: PropTypes.any,
};

export default Category;
