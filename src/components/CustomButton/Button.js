import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const Button = ({label, onPress, type = 'PRIMARY'}) => {
  const {width} = useWindowDimensions();
  return (
    <View>
      <TouchableOpacity
        style={[styles.root, styles[`root_${type}`]]}
        onPress={onPress}>
        <Text style={[styles.btn, styles[`btn_${type}`], {width: width * 0.9}]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 15,
    marginVertical: 4,
    alignItems: 'center',
    borderRadius: 6,
  },
  root_PRIMARY: {
    backgroundColor: '#b22222',
  },
  root_TERTIARY: {},
  btn: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  btn_PRIMARY: {
    textAlign: 'center',
  },
  btn_TERTIARY: {
    color: '#fff',
    textAlign: 'right',
  },
});
export default Button;
