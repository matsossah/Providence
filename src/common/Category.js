import React, { PropTypes } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import formStyles from './FormStyles';

const styles = StyleSheet.create({
  category: {
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
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
    fontWeight: '500',
    fontSize: 14,
    // textShadowOffset: {width: 2, height: 2},
    // textShadowRadius: 1,
    // textShadowColor: 'rgba(0,0,0,0.4)',
  },
  icon: {
    height: 30,
    width: 30,
    marginBottom: 5,
  },
  backdropView: {
    flex: 1,
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
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
            <Text style={[styles.categoryTitle, formStyles.font].concat(textStyle)}>
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
