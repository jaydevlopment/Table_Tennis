import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../../assets/users/user-1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../../assets/users/user-2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../../assets/users/user-3.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../../assets/users/user-4.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../../assets/users/user-5.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Yash M.',
    userImg: require('../../../assets/users/user-7.jpg'),
    messageTime: '3 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Alexa M.',
    userImg: require('../../../assets/users/user-6.jpg'),
    messageTime: '3 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '8',
    userName: 'Shubh M.',
    userImg: require('../../../assets/users/user-8.jpg'),
    messageTime: '4 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessageScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              navigation.navigate('Chat', {userName: item.userName})
            }>
            <View style={styles.userinfo}>
              <View style={styles.userwraper}>
                <Image source={item.userImg} style={styles.userImg} />
              </View>
              <View style={styles.textselection}>
                <View style={styles.useinfotext}>
                  <Text style={styles.username}>{item.userName}</Text>
                  <Text style={styles.posttime}>{item.posttime}</Text>
                </View>
                <Text style={styles.messageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft:20,
    paddingRight:20,
    justifyContent: 'center'
  },
  touchable: {
    width: '100%',
  },
  userinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userwraper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode:'contain'
  },
  textselection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  useinfotext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  username: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  posttime: {
    fontSize: 12,
    color: '#666',
    marginRight: 5,
  },
  messageText: {
    fontSize: 14,
    color: '#333333',
  },
});
