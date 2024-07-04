import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CheckboxSelect from '../../components/CustomCheckbox/CheckBox';

const LanguageSelectscreen = ({navigation}) => {
  const [checked, setChecked] = useState(false);

 

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Chose your preferred language</Text>
      <View>
        <CheckboxSelect language="English" isChecked={checked} key="English" />
      </View>
      <View>
        <CheckboxSelect
          language="Chinese/中國人"
          key="Chinese"
          isChecked={checked}
        />
      </View>
      <View>
        <CheckboxSelect
          language="French/français"
          key="French"
          isChecked={checked}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 200,
    height: '100%',
  },
  heading: {
    color: 'white',
    paddingBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LanguageSelectscreen;
