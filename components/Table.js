import React, {Component} from 'react';
import {View} from 'react-native';

export default class Table extends Component {
  renderRow() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
        <View style={{flex: 1, alignSelf: 'stretch'}} />
        <View style={{flex: 1, alignSelf: 'stretch'}} />
        <View style={{flex: 1, alignSelf: 'stretch'}} />
        <View style={{flex: 1, alignSelf: 'stretch'}} />
        <View style={{flex: 1, alignSelf: 'stretch'}} />
      </View>
    );
  }

  render() {
    const data = [1, 2, 3, 4, 5];
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {data.map(datum => {
          // This will render a row for each data element.
          return this.renderRow();
        })}
      </View>
    );
  }
}
