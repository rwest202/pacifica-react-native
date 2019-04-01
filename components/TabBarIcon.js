import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {

  get color() {
    if (this.props.color) {
      return this.props.color
    } else if (this.props.focused) {
      return Colors.tabIconSelected
    } else {
      return Colors.tabIconDefault
    }
  }

  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={this.props.size}
        style={Object.assign(this.props.style || {}, { marginBottom: -3 })}
        color={this.color}
      />
    );
  }
}