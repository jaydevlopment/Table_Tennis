import React from 'react';
import {PureRoundedCheckbox} from 'react-native-rounded-checkbox';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

const Checkbox = props => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.langBox, {width: width * 0.8, height: height * 0.08}]}
      onPress={() => {
        props.checked;
        navigation.navigate('Welcome');
      }}>
      <Text style={styles.language}>{props.language}</Text>
      <PureRoundedCheckbox />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  langBox: {
    flexDirection: 'row',
    backgroundColor: '#bb2719',
    padding: 15,
    marginVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  language: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    // paddingRight: '60%',
  },
});

export default Checkbox;
