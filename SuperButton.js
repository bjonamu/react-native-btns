import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'
import { Colors } from './Themes'
import Styles from './Styles/ButtonStyles'

const SuperButton = ({ leftIcon, rightIcon, label, labelStyle, uppercase, active, disabled, round, full, softCorners, backgroundColor, borderColor, activityIndicatorColor, onPress }) => {
  let borderRadius = 0
  if (round) {
    borderRadius = 25
  } else if (softCorners) {
    borderRadius = 4
  }
  let customStyle = { backgroundColor, borderColor, borderRadius }
  if (full) {
    customStyle.flex = 1
    customStyle.alignSelf = 'stretch'
  }
  if (leftIcon || rightIcon) {
    return (
      <Button style={[ Styles.buttonWithIcon, customStyle ]} active={active} disabled={disabled} onPress={onPress} activityIndicatorColor={activityIndicatorColor}>
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
      onPress={onPress}
      disabled={disabled}
      uppercase={uppercase}
      labelStyle={labelStyle}
      style={[ Styles.defaultButton, customStyle ]}
      activityIndicatorColor={activityIndicatorColor}
    />
  )
}

SuperButton.defaultProps = {
  label: 'Super button',
  activityIndicatorColor: Colors.snow,
  backgroundColor: Colors.transparent
}

SuperButton.propTypes = {
  full: PropTypes.bool,
  round: PropTypes.bool,
  active: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  softCorners: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  activityIndicatorColor: PropTypes.string,
  onPress: PropTypes.func.isRequired
}

export default SuperButton
