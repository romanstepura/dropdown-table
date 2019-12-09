/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Dropdown from './components/dropdown';
import Table from './components/Table2';
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
          <Table index={this.state.index} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default App;
