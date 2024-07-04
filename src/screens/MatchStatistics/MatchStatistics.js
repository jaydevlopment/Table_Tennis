import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import BottomNavBar from '../../components/BottomNavbar/BottomNavBar';

const MatchStatistics = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.statesContainer}>Match Statistics</Text>
      </ScrollView>
      <View>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    height: '100%',
    padding: 15,
  },
  statesContainer: {
    color: 'white',
    alignSelf: 'center',
  },
});

export default MatchStatistics;
