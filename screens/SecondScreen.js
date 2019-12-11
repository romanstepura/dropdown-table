import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Dropdown from './../components/dropdown';
import Table from './../components/Table2';
import Table1 from '../components/Table';

class SecondScreen extends Component {
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
      <View>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title=" Click"
        />
        <SafeAreaView>
          <ScrollView>
            <Dropdown
              onChange={val => {
                this.renderCurr(val);
              }}
            />
            <Table index={this.state.index} />
            <Table1 index={this.state.index} />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default SecondScreen;
