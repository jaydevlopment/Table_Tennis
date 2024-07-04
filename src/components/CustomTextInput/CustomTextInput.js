import React from 'react';
import { View, TextInput, StyleSheet, useWindowDimensions } from 'react-native';

const CustomTextInput = ({ value, setValue, placeholder, onChangeText, style, keyboardType, maxLength, secureTextEntry }) => {
  const { width } = useWindowDimensions();
  
  return (
    <View style={styles.root}>
      <View>
        <TextInput
          style={[style, styles.txtInput, { width: width * 0.9 }]}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={onChangeText}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="grey"
          setValue={setValue}
          value={value}
          customStyles={{
            placeholderText: {
              // fontSize: 10,
              color: '#C2C9D1',
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    alignItems: 'center',
  },
  txtInput: {
    height: 50,
    fontSize: 15,
    marginVertical: 6,
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    padding: 12,
    color:'#fff'
    // borderTopWidth: 0,
    // borderRightWidth: 0,
    // borderLeftWidth: 0,
  },
});

export default CustomTextInput;
