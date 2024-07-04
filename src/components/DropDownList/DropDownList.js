import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const DropDownList = props => {
  const [country, setCountry] = useState('Unknown');
  const [role, setRole] = useState('Unknown');
  const Country = () => {
    return (
      <>
        <Picker
          selectedValue={country}
          onValueChange={(value, index) => setCountry(value)}
          mode="dropdown" // Android only
          style={styles.picker}>
          <Picker.Item label="Country" value="Unknown" />
          <Picker.Item label="Pakistan" value="+92" />
          <Picker.Item label="India" value="+91" />
          <Picker.Item label="Canada" value="+1" />
          <Picker.Item label="USA" value="+1" />
          <Picker.Item label="Saudi Arabia" value="+966" />
        </Picker>
      </>
    );
  };
  const Role = () => {
    return (
      <>
        <Picker
          selectedValue={role}
          onValueChange={(value, index) => setRole(value)}
          mode="dropdown" // Android only
          style={styles.picker}>
          <Picker.Item label="Role" value="Unknown" />
          <Picker.Item label="Coach" value="coach" />
          <Picker.Item label="Player" value="player" />
          <Picker.Item label="Viewer" value="viewer" />
        </Picker>
      </>
    );
  };
  return <View style={styles.root}>{props.type ? <Country /> : <Role />}</View>;
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'white',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  picker: {
    width: 400,
    padding: 16,
    color: 'grey',
  },
});

export default DropDownList;
