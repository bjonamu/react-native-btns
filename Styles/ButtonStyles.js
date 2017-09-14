import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../Themes'

export default StyleSheet.create({
  defaultButton: {
    height: Metrics.baseHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultLabel: {
    color: Colors.snow,
    paddingHorizontal: Metrics.baseMargin
  },
  buttonWithIcon: {
    flex: 1,
    height: Metrics.baseHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin
  },
  iconCont: {
    width: 20,
    marginHorizontal: Metrics.baseMargin / 2
  },
  IconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  }
})
