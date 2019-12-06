/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import ExampleOne from './components/Table';
class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ExampleOne />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default App;
