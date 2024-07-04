import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Switch,
  saveCard,
  
} from 'react-native';
import remove from '../../../assets/images/remove.png';
import { API } from '../../Utils/BaseUrl';
import icon from '../../../assets/users/ttnett.jpg';
import check from '../../../assets/images/check.png';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import PaymentScreen from '../../components/PaymentScreen';
import axios from 'axios'
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height; 


const SubscriptionScreens = ({navigation}) => {
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API.BASE}/api/paymentForSub/create_Payment?subId=55`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
      }),
    });
    const {clientSecret} = await response.json();
    return clientSecret;
  };
  const {confirmPayment, loading} = useConfirmPayment();
  const handlePayPress = async () => {
    const billingDetails = billingDetails={
      email: 'jay@gmail.com',
    };
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails ,
    });
    if  (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
    } {
      return;
    }

  };

  return (
    <PaymentScreen>
    <View style={styles.container}>
      <View style={styles.backView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.dotsstyle} source={remove} />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <Image style={styles.Icon} source={icon} />
      </View>
      <View style={styles.headingtxtview}>
        <Text style={styles.headingtxt}>Payment</Text>
      </View >
      <View style={{alignSelf:'center'}}>
      <View style={styles.rows}>
    
      </View>
      <View style={styles.rows}>
      
      </View>
      <View style={styles.rows}>
      <TextInput
        autoCapitalize="none"
        placeholder="Enter E-mail Address"
        keyboardType="email-address"
        placeholderTextColor={'#ffffff'}
      //  onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      </View>
      <View style={styles.rows}>
      <CardField
        postalCodeEnabled={false}
        autofocus
        placeholders={{
          number: '4242 4242 4242 4242',
          postalCode: '12345',
          cvc: 'CVC',
          expiration: 'MM|YY',
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
        cardStyle={styles.cartStyle}
        style={styles.cardField}
      />
      </View>
      <View style={styles.rows}>
      <View style={[styles.row,{flex:1,borderWidth:1,borderColor:'#fff',margin:5,padding:5}]}>
        <Switch
         onValueChange={(value) => setSaveCard(value)}
         value={saveCard}
        />
        <Text style={styles.text}>Save card during payment</Text>
      </View>
      </View>

      <View style={styles.rows}>

      <TouchableOpacity style={styles.subscribe} onPress={handlePayPress}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Pay</Text>
        </TouchableOpacity>
      </View>

      </View>

    </View>
    </PaymentScreen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: '#000',
    
  },
  subscribe:{
    height: 50,
    backgroundColor: 'red',
    width: Width - 35,
    marginHorizontal: 16,
    borderRadius: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  backView: {
    height: 70,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dotsstyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginRight: 20,
  },
  Icon: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  IconView: {
    height: 100,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtxtview: {
    height: 50,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  headingtxt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFDFA',
  },
  txtheading: {
    fontSize: 13,
    fontWeight: '600',
    color: 'grey',
  },
  checkstyle: {
    height: 10,
    width: 10,
    tintColor: 'white',
  },
  lowerhedingView: {
    height: 50,
    // backgroundColor: 'red',
    width: Width - 100,
    marginTop: 50,
    alignSelf: 'center',
    alignItems:'center'
  },
  lowerheding: {
    color: 'white',
    fontSize: 15,
    padding: 2,
    fontWeight: '500',
  },
  txt: {
    fontSize: 10,
    color: 'grey',
    fontWeight: '500',
  },
  txtmiddle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  rows: {
    flexDirection: 'row',
    marginTop: 25,
  },
  imageviews: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtViews: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -3,
    marginLeft: 5,
  },
  cartStyle:{
    borderWidth: 1,
    backgroundColor: '#000000',
    borderColor: '#ffffff',
    borderRadius: 8,
    fontSize: 14,
    placeholderColor: '#ffffff',
    textColor: '#ffffff',
  },
  cardField: {
    width: '100%',
    height: 50,
    marginVertical: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    marginLeft: 12,
    color:'#ffffff'
  },
  input: {
    height: 44,
    width:'100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1.5,
    color:'white'
  },
});

export default SubscriptionScreens;
