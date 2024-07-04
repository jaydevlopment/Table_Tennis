import { initStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
// import { colors } from '../colors';
//import { fetchPublishableKey } from '../helpers';


const PaymentScreen = ({
  
  paymentMethod,
  children,
  onInit,
}) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function initialize() {
      // const publishableKey = await fetchPublishableKey(paymentMethod);
      const publishableKey = 'pk_test_51LkiP6SHJPKzTHHUvCluwYk0vP7jEUfaXqSl4nvI3o3oDiDgpH0Y4ZLYdlHwzFKFLp5r3rty9Me72sri0Ee99TvA00pUOnWyAB';
      if (publishableKey) {
        await initStripe({
          publishableKey,
          merchantIdentifier: 'merchant.com.stripe.react.native',
          urlScheme: 'stripe-example',
          setReturnUrlSchemeOnAndroid: true,
        });
        setLoading(false);
        onInit?.();
      }
    }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
  ) : (
    <ScrollView
      accessibilityLabel="payment-screen"
      contentContainerStyle={{
        flexGrow: 1,
        height: '100%'
      }}
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      {children}
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{ opacity: 0 }}>appium fix</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    // backgroundColor: colors.white,
  },
  cartStyle: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 8,
    fontSize: 14,
    placeholderColor: '#A020F0',
    textColor: '#0000ff',
  }
});

export default PaymentScreen;