import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../assets/images/team-24.png';
import deleteimage from '../../../assets/images/delete.png';
import editimage from '../../../assets/images/edit.png';
import { GetPlayerListAction } from '../../../redux/Actions/GetPlayerListAction';
import { PlayerVIdeoDelAction } from '../../../redux/Actions/PlayerVIdeoDelAction';
import { TextInput } from 'react-native-paper';
import { UpdatePlayerAction } from '../../../redux/Actions/UpdatePlayerAction';
import videoimage from '../../../assets/images/Waldner-cup-002.png';
import backImg from '../../../assets/images/back.png';


const WIDTH = Dimensions.get('window').width;

const PracticeVideos = ({navigation}) => {

  const dispatch = useDispatch();

  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const LoginSuccessRes = useSelector(state => state?.loginReducer?.LOGINRES);
  const Getplayersuccessres = useSelector(state => state?.GetPlayerListReducer?.GETPLAYERRES);
  const Playervideodelres = useSelector(state => state?.PlayerVIdeoDelReducer?.PLAYERVIDEODELETERES);
  const Updateplayersuccessres = useSelector(state => state?.UpdatePlayerReducer?.UPDATEPLAYERRES);

 console.log('Updateplayersuccessres.....', Updateplayersuccessres);


  useEffect(() => {
    setToken(LoginSuccessRes?.data?.token);
  }, [LoginSuccessRes]);

  useEffect(() => {
    if (token) {
      GetPlayerListApicall(token)
    }
  }, [token]);

  console.log("Token...", token);
  useEffect(() => {
    if (Playervideodelres) {
      GetPlayerListApicall(token)
    }
  }, [Playervideodelres]);

  useEffect(() => {
    if (Updateplayersuccessres) {
      GetPlayerListApicall(token)
    }
  }, [Updateplayersuccessres]);

  const GetPlayerListApicall = (token) => {
    if (token) {
      // setIsLoading(true);
      const sendData = {
        token: token,
      };
      console.log('sendData', sendData);
      dispatch(GetPlayerListAction(sendData));
    } 
  }

  const DeleteApicall = async (item) => {
    if (token === '') {
      Alert.alert('Token is null');
    } 
    // else if (item?.id === '') {
    //   Alert.alert('id is null');
    // }
     else {
      const sendData = {
        token: token,
        id: item?.id,
      };
      console.log('sendData', sendData);
      dispatch(PlayerVIdeoDelAction(sendData));
    }
  }
  const UpdateApicall = async (item) => {
    setModalVisible(!modalVisible)
    // if (item.id === '') {
    //   Alert.alert('id is null');
    // } else 
    if (title === '') {
      Alert.alert('Please enter title');
    } else if (content === '') {
      Alert.alert('please enter content');
    } else {
      // setIsLoading(true);
      const sendData = {
        id: item.id,
        title: title,
        content: content,
        token: token,
      };
      console.log('sendData', sendData);
      dispatch(UpdatePlayerAction(sendData));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
            <Text style={styles.toolbarTxt}>Practice Videos</Text>
        </View>
      </View>
      <FlatList
        data={Getplayersuccessres.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.flatlistView}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginTop: 10, marginLeft: 10 }}>
                <TouchableOpacity style={styles.cardContent}>
                  <Image source={videoimage} style={styles.cardImage} />
                </TouchableOpacity>
              </View>
              <View style={styles.cardTxtbody}>
                <Text style={styles.cardHeadTxt}>{item.title}</Text>
                <View style={{ width: 170 }}>
                  <Text style={styles.cardTxt}>{item.content}</Text>
                </View>
              </View>
              <View style={styles.buttonimage}>
                <TouchableOpacity onPress={() => DeleteApicall(item)}>
                  <Image source={deleteimage} style={styles.delete} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { toggleModal() }}>
                  <Image source={editimage} style={styles.edit} />
                </TouchableOpacity>
              </View>
            </View>
            <Modal
              // animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            > 
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.textStyle}>Update Title or Content.</Text>
                  <View style={styles.drawLineModel}>
                    <></>
                  </View>
                  <View style={{ height: 50, marginTop: 10 }} >
                    <Text style={[styles.textStyle, { paddingLeft: 10 }]}>Title</Text>
                    <TextInput onChangeText={(text) => setTitle(text)} style={{ width: '90%', marginLeft: 15 }} multiline placeholder='Update your Title...' />
                  </View>
                  <View style={{ height: 200, marginTop: 35 }} >
                    <Text style={[styles.textStyle, { paddingLeft: 10 }]}>Discription</Text>
                    <TextInput onChangeText={(text) => setContent(text)} style={{ width: '90%', marginLeft: 15 }} multiline placeholder='Update your Content...' />
                  </View>
                  <View style={{ marginTop: -70 }}>
                    <Pressable
                      style={styles.buttonClose}
                      onPress={() => UpdateApicall(item)}
                    >
                      <Text style={styles.textStyle}>Update</Text>
                    </Pressable>
                    <Pressable
                      style={styles.buttonClose}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    //  alignItems: 'center',
    //  justifyContent: 'center',
    backgroundColor: '#000',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  btnAdd: {
    backgroundColor: 'white',
    borderColor: '#db2c1e',
  },
  root: {
    backgroundColor: '#1E1E1E',
    height: '100%',
  },
  cardContent: {
    flexDirection: 'row',
    // padding: 15,
    borderWidth: 1,
    borderColor: '#bb2719',
    // backgroundColor:'red'
  },
  cardImage: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    margin: 5,
    // padding: 6,
  },
  cardHeadTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardTxtbody: {
    margin: 10,
    numberOfLines: 1,
    height: 80,
    // paddingBottom: 10,
    height: 100,
    width: 190
  },
  cardTxt: {
    color: 'grey',
    fontSize: 10
  },
  flatlistView: {
    width: 290,
    marginLeft: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  delete: {
    resizeMode: 'contain',
    height: 20,
    width: 20
  },
  edit: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    tintColor: 'red'
  },
  modalView: {
    backgroundColor: 'white',
    height: 250,
    borderRadius: 5,
    marginTop: 180,
  },
  buttonClose: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginHorizontal: 23,
    borderRadius: 5,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  drawLineModel: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: 350,
    alignSelf: 'center',
    marginBottom: 4
  },
  headerview: {
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  buttonimage: {
    height: 110,
    width: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'white',
    marginVertical:5,
    marginLeft:-10
  },
  container1: {
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 5,
    width:'100%'
    // paddingLeft:20
  },
  headercontent: {
    justifyContent: 'flex-start',
  },
  SignUpsty: {
    marginLeft:90
  },
  toolbarTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgBtn: {
    height: 30,
    width: 30,
  },
});

export default PracticeVideos;
