import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'
import { Metrics, Colors } from './Themes'
import Styles from './Styles/ButtonStyles'

const SuperButton = ({ size, label, labelStyle, uppercase, leftIcon, rightIcon, active, disabled, round, softCorners, backgroundColor, borderColor, borderWidth, activityIndicatorColor, onPress }) => {
  let borderRadius = 0
  const height = Metrics.buttons[size] + borderWidth
  if (round) {
    borderRadius = height / 2
  } else if (softCorners) {
    borderRadius = 4
  }

  let customStyle = { flex: 1, backgroundColor, borderColor, borderWidth, borderRadius, height }

  if (leftIcon || rightIcon) {
    return (
      <Button style={[ Styles.buttonWithIcon, customStyle ]} active={active} disabled={disabled} onPress={onPress} activityIndicatorColor={activityIndicatorColor}>
        <View style={Styles.iconCont}>{leftIcon}</View>
        <Text style={labelStyle}>{uppercase ? label.toUpperCase() : label }</Text>
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
  size: 'normal',
  label: 'Super button',
  labelStyle: Styles.defaultLabel,
  activityIndicatorColor: Colors.snow,
  backgroundColor: Colors.transparent,
  borderColor: Colors.transparent,
  borderWidth: 0
}

SuperButton.propTypes = {
  size: PropTypes.oneOf(['tiny', 'normal', 'large']),
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
