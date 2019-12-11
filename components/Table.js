import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

export default class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tableHead: ['Купівля', 'Продаж'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
      ],
    };
  }

  async componentWillReceiveProps() {
    //Have a try and catch block for catching errors.
    try {
      const response = await fetch(
        'https://money24.com.ua/rates/get/commercial/' +
          this.props.index.toString(),
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
      const table_ = [];
      console.log(json.results);
      const currs = ['usd', 'eur', 'huf'];
      for (let curr of currs) {
        const item = this.getArray(json.results, curr);

        const tableRow_ = [];
        tableRow_.push(item.buy);
        tableRow_.push(curr);
        tableRow_.push(item.sal);

        table_.push(tableRow_);
        console.log(table_);
      }

      this.setState({
        isLoading: false,
        tableData: table_,
      });
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  getArray(list, curr) {
    const obj = {
      sal: 0,
      buy: 0,
      currCode: curr,
    };

    for (let item of list) {
      if (item.currCode === curr) {
        if (item.type === 'buy') {
          obj.buy = item.rate;
        }

        if (item.type === 'sal') {
          obj.sal = item.rate;
        }
      }
    }
    return obj;
  }

  render() {
    console.log(this.state.isLoading);
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Table>
            <Row
              data={this.state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    //display: 'none',
    flex: 1,
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    margin: 'auto',
    justifyContent: 'center',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
});
