import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        console.warn('Pressed');
      }}>
      <Image source={props.thumbnail} style={styles.cardThumbnail} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    borderRadius: 15,
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
