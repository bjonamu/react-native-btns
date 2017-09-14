import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native'
import Styles from './Styles/ButtonStyles'
import { Colors } from './Themes'

const Button = ({ style, onPress, label, labelStyle, uppercase, active, disabled, activityIndicatorColor, children }) => {
  let content
  if (active) {
    content = <ActivityIndicator color={activityIndicatorColor} />
  } else if (label) {
    content = <Text style={labelStyle || Styles.defaultLabel}>{uppercase ? label.toUpperCase() : label }</Text>
  }
  return (
    <TouchableOpacity disabled={active || disabled} onPress={onPress} style={style}>
      { content || children }
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  activityIndicatorColor: Colors.snow
}

Button.propTypes = {
  label: PropTypes.string,
  uppercase: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  activityIndicatorColor: PropTypes.string,
  onPress: PropTypes.func.isRequired
}

export default Button
