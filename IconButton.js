import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Metrics, Colors } from './Themes'
import styles from './Styles/ButtonStyles'

const IconButton = ({ icon, size, active, disabled, activityIndicatorColor, backgroundColor, borderColor, round, onPress }) => {
  let borderRadius = 0
  if (round) {
    borderRadius = size / 2
  }
  const customStyle = { width: size, height: size, backgroundColor, borderColor, borderRadius }
  return (
    <Button
      active={active}
      disabled={disabled}
      onPress={onPress}
      style={[ styles.IconButton, customStyle ]}
      activityIndicatorColor={activityIndicatorColor}
    >
      {icon}
    </Button>
  )
}

IconButton.defaultProps = {
  activityIndicatorColor: Colors.snow,
  backgroundColor: Colors.transparent,
  borderColor: Colors.transparent,
  size: Metrics.baseSize
}

IconButton.propTypes = {
  round: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.number,
  icon: PropTypes.element,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  activityIndicatorColor: PropTypes.string,
  onPress: PropTypes.func.isRequired
}

export default IconButton
