import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import profileImage from '../../../assets/images/user.png';
import search from '../../../assets/images/search.png';
import {useDispatch, useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateteamTop = ({navigation}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const goToTeam = () => {
    setModalVisible(!modalVisible);
    dispatch({ type: 'teamactivity', payload: '' });
    dispatch({ type: 'postactivity', payload: '' });
    dispatch({ type: 'inviteactivity', payload: '' });
    dispatch({ type: 'uploadimage', payload: '' });
    dispatch({ type: 'addteam', payload: '' });
    navigation.navigate('CreateNewTeam');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 0.6,
          width: '100%',
          marginTop: 10,
          alignSelf: 'center',
        }}>
        <></>
      </View>
      <ScrollView>
        <View
          style={{
            height: 30,
            backgroundColor: '#1E1E1E',
            marginTop: 10,
            justifyContent: 'center',
            paddingHorizontal: 8
          }}>
          <Text style={styles.connectionTxt}>Teams</Text>
        </View>
        <View style={styles.row}>
          <View style={{margin: 10}}>
            <Image
              style={{
                resizeMode: 'contain',
                tintColor: 'white',
                height: 50,
                width: 50,
              }}
              source={profileImage}
            />
          </View>
          <View style={{margin: 10}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                padding: 5,
              }}>
              Team name 1
            </Text>
            <Text
              style={{
                color: 'grey',
                fontWeight: 'bold',
                fontSize: 11,
                marginLeft: 7,
                marginTop: -2,
              }}>
              1 member
            </Text>
          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <TouchableOpacity
          onPress={() => {
            toggleModal();
          }}>
          <View style={styles.createteamView}>
            <Text style={{ fontSize: 20, color: '#fff', marginTop: -1}}>+</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff', marginLeft:5}}>
              Create a new team
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.connectionView}>
          <Text style={styles.connectionTxt}>Connections</Text>
        </View>
        <View style={styles.searchView}>
          <TouchableOpacity>
            <Image style={styles.searchstyle} source={search} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Choose how you want to create a team.
            </Text>
            <View style={styles.drawLineModel}>
              <></>
            </View>
            <View
              style={{
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                onPress={() => goToTeam()}>
                <Text style={styles.modalTextNav}>Create new team</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.drawLineModel}>
              <></>
            </View>
            <View
              style={{
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                onPress={() => {
                  // navigation.navigate('');
                  console.warn('Teamsnap');
                }}>
                <Text style={styles.modalTextNav}>Create from TeamSnap</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: windowWidth - 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  drawLineModel: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: 350,
    alignSelf: 'center',
    marginBottom: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 30
  },
  modalView: {
    height: 160,
    width: 340,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    // shadowColor: "#fff",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 5,
  },
  buttonClose: {
    backgroundColor: '#fff',
    height: 50,
    width: 340,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 5,
  },
  modalTextNav: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1E1E1E',
  },
  nameView: {
    // backgroundColor:'red',
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toptabs: {
    backgroundColor: '#1E1E1E',
    height: 50,
    width: windowWidth,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageViewTop: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: windowWidth / 4,
    // backgroundColor:'#fff',
    borderBottomWidth: 3,
    borderColor: 'white',
    margin: 1,
  },
  imageViewTop1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: windowWidth / 4,
    // backgroundColor:'#fff',
    margin: 1,
  },
  toptabsimage: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    tintColor: 'white',
  },
  toptabsimage1: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    tintColor: 'grey',
  },
  imagebagView: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  searchstyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: '#C2C9D1',
  },
  searchView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#C2C9D1',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  connectionTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  connectionView: {
    height: 30,
    backgroundColor: '#1E1E1E',
    marginTop: 30,
    justifyContent: 'center',
    paddingHorizontal:10,
  },
  createteamView: {
    height: 45,
    width: windowWidth - 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    alignSelf:'center',
    flexDirection:'row'
  },
});

export default CreateteamTop;
