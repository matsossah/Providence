import React, { PropTypes } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

function Icon(props) {
  const { image, iconStyle, onPress, ...otherProps } = props;
  return (
    <TouchableOpacity
      {...otherProps}
      style={iconStyle}
      onPress={onPress}
    >
      <Image
        style={iconStyle}
        source={image}
      />
    </TouchableOpacity>
  );
}

Icon.propTypes = {
  iconStyle: PropTypes.any.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Icon;
