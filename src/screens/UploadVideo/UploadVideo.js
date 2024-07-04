import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import backImg from '../../../assets/images/back.png';
// import VideoPlayer from 'react-native-video-controls';
import {useDispatch, useSelector} from 'react-redux';
import {UploadPlayerAction} from '../../../redux/Actions/UploadPlayerAction';
import Button from '../../components/CustomButton/Button';
import {ActivityIndicator} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').heights;

const UploadVideo = ({navigation}) => {
  const dispatch = useDispatch();

  const [videouri, setVideouri] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [usertype, setUsertype] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const VideoUploadres = useSelector(
    state => state?.UploadPlayerReducer?.UPLOADPLAYERRES,
  );
  console.log('VideoUploadres...', VideoUploadres);

  useFocusEffect(
    React.useCallback(() => {
      console.log('inside useeffect');
      getToken();
    }, []),
  );

  useEffect(() => {
    if (VideoUploadres) {
      const time = new Date(new Date().getTime()+ 150000).toLocaleTimeString();
      AsyncStorage.setItem('sessionTime', time);
      if (VideoUploadres?.status === 1) {
        setIsLoading(false);
        setVideouri('');
        setTitle('');
        setDiscription('');
        // navigation.navigate('PlayerTabs');
      } else if (VideoUploadres?.status !== 1) {
        setIsLoading(false);
      }
    }
  }, [VideoUploadres]);

  const getToken = async () => {
    const logToken = await AsyncStorage.getItem('token');
    const usertype = await AsyncStorage.getItem('roleType');
    console.log('logToken..', logToken);
    console.log('user_Type..', usertype);
    setToken(logToken);
    setUsertype(usertype);
  };

  const PlayerVideoUploadApicall = () => {
    if (videouri === '') {
      Alert.alert('Please select Video');
    } else if (title === '') {
      Alert.alert('Please enter title');
    } else if (discription === '') {
      Alert.alert('Please enter discription');
    } else {
      setIsLoading(true);
      const sendData = {
        title: title,
        content: discription,
        video: videouri,
        user_type: usertype,
        token: token,
        name: name,
        type:type
      };
      console.log('sendData', sendData);
      dispatch(UploadPlayerAction(sendData));
    }
  };

  const openLibraryFunc = async () => {
    console.log('press');
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        mode: 'open',
      });
      console.log('res....', res);
      setVideouri(res[0].uri);
      setName(res[0].name);
      setType(res[0].type);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        setModalVisible(!modalVisible);
      } else {
        throw err;
      }
    }
  };
  // console.log('video.......', videouri);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        {usertype === 'coach' ?
        (<View style={styles.SignUpsty}>        
           <Text style={styles.toolbarTxt}>Upload Training Videos</Text> 
          </View> ) :
          (<View style={styles.SignUpsty}>
          
            <Text style={styles.toolbarTxt}>Upload Practice Videos</Text> 
           </View> )
        }       
      </View>
      <ScrollView>
      <KeyboardAvoidingView>
        <View style={{marginTop: 15}}>
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={openLibraryFunc}>
              <View style={styles.viewin}>
              <Video  paused={true} resizeMode="contain" style={styles.backgroundVideo} source={{ uri: videouri }}/>
              </View>
            </TouchableOpacity>
            <View style={{height: 120, width: 200}}>
              <Text style={styles.txttitle}>Title *</Text>
              <TextInput
                style={styles.txtinputtitle}
                value={title}
                onChangeText={text => setTitle(text)}
                multiline={true}
                placeholderTextColor="grey"
                placeholder="Caption your video"
              />
            </View>
          </View>
          <View style={styles.drawLine}>
            <></>
          </View>
          <View style={styles.discriptionview}>
            <Text style={styles.txttitle}>Description *</Text>
            <TextInput
              style={styles.txtinput}
              // returnKeyType="done"
              value={discription}
              onChangeText={text => setDiscription(text)}
              multiline={true}
              maxLength={250}
              placeholderTextColor="grey"
              placeholder="Add Description..."
            />
          </View>
          {isLoading ? (
            <View style={styles.btnContainer}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
            <TouchableOpacity onPress={PlayerVideoUploadApicall}>
              <View style={styles.btnContainer}>
                <Text
                  style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                  Upload
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    alignItems: 'center',
  },
  btnContainer: {
    width: widthScreen - 50,
    marginTop: 10,
    backgroundColor: 'red',
    height: 50,
    alignSelf: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.9,
    width: 340,
    marginTop: 25,
    alignSelf: 'center',
  },
  txtinputtitle: {
    color: '#fff',
    // paddingLeft: 13,
    // backgroundColor:'red',
    width: widthScreen - 250,
    alignSelf: 'center',
    height: 80,
    marginTop: 5,
  },
  txtinput: {
    color: '#fff',
    // paddingLeft: 13,
    // backgroundColor:'blue',
    width: widthScreen - 70,
    alignSelf: 'center',
    height: 150,
  },
  txttitle: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 8,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  viewin: {
    height: 120,
    width: widthScreen / 3.5,
    borderWidth: 2,
    borderColor: '#1E1E1E',
    borderRadius: 5,
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
    color: 'white',
  },
  discriptionview: {
    height: 200,
    width: widthScreen - 50,
    borderWidth: 2,
    borderColor: '#1E1E1E',
    marginTop: 20,
    marginHorizontal: 13,
    borderRadius: 5,
    // backgroundColor:'red'
    alignSelf: 'center',
  },
  container1: {
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    // paddingLeft:20
  },
  headercontent: {
    justifyContent: 'flex-start',
  },
  SignUpsty: {
    marginLeft: 58,
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default UploadVideo;
