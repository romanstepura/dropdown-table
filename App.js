import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Dropdown from './components/dropdown';
import Table from './components/Table2';
import {DrawerNavigation} from './components/Navigation';
import {Provider} from 'react-redux';
import store from './store';
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
      <Provider store={store}>
        <DrawerNavigation />
      </Provider>
    );
  }
}
export default App;
