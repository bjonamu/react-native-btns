import React from 'react'
import SuperButton from './SuperButton'
import PropTypes from 'prop-types'
import Footer from './Footer'

const FooterButton = ({ leftIcon, rightIcon, label, labelStyle, uppercase, active, disabled, backgroundColor, activityIndicatorColor, onPress }) => (
  <Footer>
    <SuperButton
      full
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
  label: 'Footer button'
}

FooterButton.propTypes = {
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
