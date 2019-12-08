/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, SafeAreaView, ScrollView, Picker, Alert} from 'react-native';
import Table1 from './components/Table';
import Dropdown from './components/dropdown';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 9,
    };
  }

  renderCurr(index) {
    this.setState({index: index});
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Dropdown
            onChange={val => {
              this.renderCurr(val);
            }}
          />
          <Table1 index={this.state.index} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default App;
