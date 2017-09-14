import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../Themes'

export default StyleSheet.create({
  defaultButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultLabel: {
    color: Colors.snow,
    paddingHorizontal: Metrics.baseMargin,
    fontSize: 14,
    fontWeight: '600'
  },
  buttonWithIcon: {
    flex: 1,
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
