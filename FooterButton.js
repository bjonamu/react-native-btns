import React from 'react'
import SuperButton from './SuperButton'
import PropTypes from 'prop-types'
import Footer from './Footer'
import { Metrics } from './Themes'

const FooterButton = ({ size, leftIcon, rightIcon, label, labelStyle, uppercase, active, disabled, backgroundColor, activityIndicatorColor, onPress }) => (
  <Footer height={Metrics.buttons[size]}>
    <SuperButton
      size={size}
      label={label}
      active={active}
      disabled={disabled}
      onPress={onPress}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      uppercase={uppercase}
      labelStyle={labelStyle}
      backgroundColor={backgroundColor}
      activityIndicatorColor={activityIndicatorColor}
    />
  </Footer>
)

FooterButton.defaultProps = {
  size: 'normal',
  label: 'Footer button'
}

FooterButton.propTypes = {
  size: PropTypes.oneOf(['tiny', 'normal', 'large']),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  uppercase: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  backgroundColor: PropTypes.string,
  activityIndicatorColor: PropTypes.string,
  onPress: PropTypes.func.isRequired
}

export default FooterButton
