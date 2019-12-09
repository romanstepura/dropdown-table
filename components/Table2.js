import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text, } from 'react-native';
import {Icon} from 'native-base';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }
  renderRow(tableData) {
    return (
      <View style={styles.containerRow}>
        <View style={styles.rowCell}>
          <Text style={styles.rowText}>{tableData.buy}</Text>
        </View>
        <View style={styles.rowCell}>
          <Text style={styles.rowTextCurrency}>{tableData.currCode}</Text>
        </View>
        <View style={styles.rowCell}>
          <Text style={styles.rowText}>{tableData.sal}</Text>
        </View>
      </View>
    );
  }
  async componentDidUpdate() {
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

        //const tableRow_ = [];
        table_.push(item);

        //table_.push(tableRow_);
        console.log(table_);
      }

      this.setState({
        isLoading: false,
        currencies: table_,
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
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.containerRow}>
            <View style={styles.rowCell}>
              <Text style={styles.rowHeadLeft}>Купівля</Text>
            </View>
            <View style={styles.rowCell}>
              <Text style={styles.rowHeadRight}>Продаж</Text>
            </View>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {this.state.currencies.map(datum => {
              return this.renderRow(datum);
              // This will render a row for each data element.
            })}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  containerRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowCell: {
    flex: 1,
  },
  rowHeadLeft: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderColor: 'yellow',
  },
  rowHeadRight: {
    fontSize: 20,
    textAlign: 'right',
    paddingRight: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderColor: 'yellow',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'yellow',
  },
  rowTextCurrency: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'yellow',
  },
});
