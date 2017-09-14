import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Metrics } from './Themes'

const Footer = ({ children, height }) => (
  <View style={[styles.container, { height }]}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

Footer.defaultProps = {
  height: Metrics.baseHeight
}

Footer.propTypes = {
  height: PropTypes.number
}

export default Footer
