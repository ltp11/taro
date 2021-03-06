/**
 * IOS: Remember to link the libART.a into your project,
 * see more: https://stackoverflow.com/questions/37658957/no-component-found-for-view-with-name-artshape.
 *
 * ✔ type
 * ✔ size
 * ✔ color
 *
 * @see https://github.com/react-native-china/react-native-ART-doc
 * @example <Icon type='success' color='green' />
 *
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  ART,
  StyleSheet,
} from 'react-native'
import * as WEUI from '../../assets/weui'

const { Surface, Shape, Transform } = ART
const iconTypeMap: Object = {
  'success': 'SUCCESS',
  'success_no_circle': 'SUCCESS_NO_CIRCLE',
  'info': 'INFO',
  'warn': 'WARN',
  'waiting': 'WAITING',
  'cancel': 'CANCEL',
  'download': 'DOWNLOAD',
  'search': 'SEARCH',
  'clear': 'CLEAR',
}

type Props = {
  style?: StyleSheet.Styles,
  type: 'success' | 'success_no_circle' | 'info' | 'warn' | 'waiting' | 'cancel' | 'download' | 'search' | 'clear',
  size: number,
  color: string | number,
}

class _Icon extends Component<Props> {
  static defaultProps = {
    size: 23,
    color: 'black',
  }

  render () {
    const {
      style,
      type,
      size,
      color,
    } = this.props

    const iconPath = WEUI[iconTypeMap[type]]

    if (!iconPath) {
      return (
        <View style={[style, { width: size, height: size }]} />
      )
    }

    const transform = new Transform().scale(size / WEUI.VIEWBOX_SIZE)

    return (
      <View style={[style, { width: size, height: size }]}>
        <View style={{
          transform: [{ rotateX: '180deg' }]
        }}>
          <Surface width={size} height={size}>
            <Shape
              d={iconPath}
              width={size}
              height={size}
              fill={color}
              transform={transform} />
          </Surface>
        </View>
      </View>
    )
  }
}

export default _Icon
