import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Picker} from 'react-native';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currs: [],
      currency: 9,
      isLoading: true,
      callback: this.props.onChange,
    };
  }

  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      const response = await fetch(
        'https://money24.com.ua/rates/dic/commercial-departments',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'access-token': '8CFFDF56-A36F-405D-890B-B4CAD31F77A6',
          },
          body: JSON.stringify({}),
        },
      );

      const json = await response.json();
      this.setState({
        isLoading: false,
        currs: json.results,
      });
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  onSelect(val) {
    this.props.onChange(val);
    this.setState({
      currency: val,
    });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <Picker
          selectedValue={this.state.currency}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => this.onSelect(itemValue)}>
          {this.state.currs.map(number => (
            <Picker.Item
              label={number.name}
              value={number.id}
              key={number.id}
            />
          ))}
        </Picker>
      );
    } else {
      return null;
    }
  }
}
