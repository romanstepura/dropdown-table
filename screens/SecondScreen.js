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
import {Dropdown2} from '../components/dropdown2';
import {Table3} from './../components/Table3';

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
            <Dropdown2
              onChange={val => {
                this.renderCurr(val);
              }}
            />
            <Table3 index={this.state.index} />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default SecondScreen;
