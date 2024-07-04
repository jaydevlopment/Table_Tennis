import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import Navigation from './src/components/Navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './redux/Store/configureStore';


const store = configureStore()

const LotsOfStyles = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' backgroundColor="#1e1e1e" />
        <View style={styles.container}>
          {/* <StatusBar barStyle='light-content' backgroundColor="#1e1e1e" /> */}
          <Navigation />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '1E1E1E',
  },
});

export default LotsOfStyles;
