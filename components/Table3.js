import React, { useState, useEffect, useSelect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
export const Table3 = ({ index }) => {
  const [currencies, setCurrencies] = useState([]);

  function renderRow(tableData) {
    let iconName = 'usd';
    return (
      <View style={styles.containerRow}>
        <View style={styles.rowCell}>
          <Text style={styles.rowText}>{tableData.buy}</Text>
        </View>
        <View style={styles.rowCell}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 15,
            }}>
            <Text style={styles.rowTextCurrency}>
              {tableData.currCode.toUpperCase()}
            </Text>
            <Image
              style={{ height: 30, width: 30 }}
              source={require(`../flags/${iconName}.png`)}
            />
          </View>
        </View>
        <View style={styles.rowCell}>
          <Text style={styles.rowText}>{tableData.sal}</Text>
        </View>
      </View>
    );
  }
  async function getTable(indexTable) {
    try {
      const response = await fetch(
        'https://money24.com.ua/rates/get/commercial/' + indexTable.toString(),
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
      const currs = [];
      console.log(json.results);

      json.results.forEach(item => currenciesName(item));

      function currenciesName(item) {
        if (item.type === 'buy' && item.currCode !== 'uah') {
          return currs.push(item.currCode);
        }
      }

      for (let curr of currs) {
        const item = getArray(json.results, curr);
        table_.push(item);
      }

      setCurrencies(table_);
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }
  const selectedDepartment = useSelector(
    state => state.currency.selectedDepartment,
  );

  useEffect(() => {
    getTable(selectedDepartment);
  }, [selectedDepartment]);

  function getArray(list, curr) {
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {currencies.map(datum => {
          return renderRow(datum);
          // This will render a row for each data element.
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
  },
  containerRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowCell: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'yellow',
  },
  rowHeadLeft: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 30,
    paddingBottom: 15,
    paddingTop: 15,
  },
  rowHeadRight: {
    fontSize: 20,
    textAlign: 'right',
    paddingRight: 30,
    paddingBottom: 15,
    paddingTop: 15,
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
  },
  rowTextCurrency: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
