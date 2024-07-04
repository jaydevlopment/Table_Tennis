import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = props => {    
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTxtTitle}>{props.title}</Text>
        <View style={styles.cardFigContain}>
          <Text style={styles.cardFigTxt}>{props.number}</Text>
          <Text style={styles.txtHr}>{props.hr}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 15,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 5,
    shadowRadius: 1,
    elevation: 15,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderRadius: 15,
  },
  cardTxtTitle: {
    color: '#db2c1e',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardFigContain: {
    flexDirection: 'row',
  },
  cardFigTxt: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  txtHr: {
    color: '#db2c1e',
    marginHorizontal: 5,
    marginTop: 13,
  },
});

export default Card;
