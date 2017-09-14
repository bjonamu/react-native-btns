import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Button from './Button'
import { Colors } from './Themes'
import Styles from './Styles/ButtonStyles'

const LinkButton = ({ leftIcon, rightIcon, label, labelStyle, uppercase, active, disabled, activityIndicatorColor, onPress }) => {
  if (leftIcon || rightIcon) {
    return (
      <Button style={Styles.buttonWithIcon} active={active} onPress={onPress} activityIndicatorColor={activityIndicatorColor}>
        <View style={Styles.iconCont}>{leftIcon}</View>
        <Text style={labelStyle || Styles.defaultLabel}>{uppercase ? label.toUpperCase() : label }</Text>
        <View style={Styles.iconCont}>{rightIcon}</View>
      </Button>
    )
  }
  return (
    <Button
      label={label}
      active={active}
      disabled={disabled}
      onPress={onPress}
      uppercase={uppercase}
      labelStyle={labelStyle}
      activityIndicatorColor={activityIndicatorColor}
    />
  )
}

LinkButton.defaultProps = {
  label: 'Link button',
  activityIndicatorColor: Colors.snow
}

LinkButton.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  uppercase: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  activityIndicatorColor: PropTypes.string,
  onPress: PropTypes.func.isRequired
}

export default LinkButton
