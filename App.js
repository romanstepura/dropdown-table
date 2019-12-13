import React from 'react';
import {Provider} from 'react-redux';
import {DrawerNavigation} from './components/Navigation';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DrawerNavigation />
      </Provider>
    );
  }
}
export default App;
