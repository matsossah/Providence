import React, { PropTypes } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

function ClickableImage(props) {
  const { image, imageStyle, onPress, ...otherProps } = props;
  return (
    <TouchableOpacity
      {...otherProps}
      style={imageStyle}
      onPress={onPress}
    >
      <Image
        style={imageStyle}
        source={image}
      />
    </TouchableOpacity>
  );
}

ClickableImage.propTypes = {
  imageStyle: PropTypes.any.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default ClickableImage;
