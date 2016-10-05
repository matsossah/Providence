import React, { PropTypes } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
  },
});

function Button(props) {
  const { text, textStyle, buttonStyle, onPress, ...otherProps } = props;
  return (
    <TouchableOpacity
      {...otherProps}
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  buttonStyle: PropTypes.any,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.any,
  onPress: PropTypes.func,
};

export default Button;
