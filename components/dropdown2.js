import React, { useState, useEffect, useCallback } from 'react';
import { Picker, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoadDropdown, UpdateTable } from '../store/actions/currencies';

export const Dropdown2 = ({ onChange }) => {
  //const [isLoading, setIsLoading] = useState(true);
  //const [currs, setCurrs] = useState([]);
  //const [currency, setCurrency] = useState(0);

  const dispatch = useDispatch();
  async function getDepartments() {
    try {
      const response = await fetch(
        'https://money24.com.ua/rates/dic/commercial-departments',
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
      dispatch(LoadDropdown(json.results));
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }
  useEffect(() => {
    getDepartments().then();
  }, []);
  const departments = useSelector(state => state.currency.departments);

  const selectedDepartment = useSelector(
    state => state.currency.selectedDepartment,
  );
  console.log(departments);
  const onSelect = val => {
    dispatch(UpdateTable(val));
  };
  return (
    <View style={styles.PikerWrap}>
      <Picker
        style={styles.stylePicker}
        selectedValue={selectedDepartment}
        onValueChange={itemValue => onSelect(itemValue)}>
        <Picker.Item label={'Вкажіть відділення'} />
        {departments.map(number => (
          <Picker.Item label={number.name} value={number.id} key={number.id} />
        ))}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  PikerWrap: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
    paddingLeft: 15,
  },
  stylePicker: {
    flex: 1,
  },
});
