/**
 * ✔ selectable
 * ✘ space
 * ✘ decode: Fixed value TRUE
 *
 * @flow
 */

import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

type Props = {
  style?: StyleSheet.Styles,
  children?: any,
  selectable?: boolean,
}

class _Text extends Component<Props> {
  render () {
    const {
      style,
      children,
      selectable,
    } = this.props

    return (
      <Text
        {...this.props}
        selectable={!!selectable}
        style={style}
      >
        {children}
      </Text>
    )
  }
}

export default _Text
