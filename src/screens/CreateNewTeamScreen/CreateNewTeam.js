import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import profileImage from '../../../assets/images/user.png';
import BackgroundImage from '../../../assets/images/Waldner-cup-002.png';
import camera from '../../../assets/images/camera.png';
import rightarrow from '../../../assets/images/right-arrow.png';
import DocumentPicker from 'react-native-document-picker';
import {AddTeamAction} from '../../../redux/Actions/AddTeamAction';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import {UploadImageAction} from '../../../redux/Actions/UploadImageAction'

const windowWidth = Dimensions.get('window').width;

const CreateNewTeam = ({navigation}) => {
  
  const dispatch = useDispatch();
  
  const AddTeamsuccess = useSelector(state => state?.AddTeamReducer?.ADDTEAMRES);
  const UpdateProfilesuccess = useSelector(state => state?.UploadImageReducer?.UPLOADIMAGE);
  const TeamActivitysuccess = useSelector(state => state?.SignUpReducer?.TEAMACTRES);
  const PostActivitysuccess = useSelector(state => state?.SignUpReducer?.POSTACTRES);
  const InviteActivitysuccess = useSelector(state => state?.SignUpReducer?.INVITEACTRES);
  console.log('PostActivitysuccess.... ', InviteActivitysuccess);

  const [imageupload, setImageupload] = useState('');
  // const [imageuploadback, setImageuploadback] = useState('');
  const [onchange, setOnchange] = useState('');
  const [teamname, setTeamname] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [activity, setActivity] = useState(0);
  const [post, setPost] = useState(0);
  const [postName, setPostName] = useState('All Members');
  const [invite, setInvite] = useState(0);
  const [inviteName, setInviteName] = useState('All Members');
  const [teamNotification, setTeamNotification] = useState(0);
  const [type, setType] = useState('');
  const [token, setToken] = useState('');
  const [text, setText] = useState('Automatic');

  useFocusEffect(
    React.useCallback(() => {
      getToken();
      // setImageupload('');
      // setImageuploadback('');
    }, []),
  );


  useEffect(() => {
    if (InviteActivitysuccess) {
      setInviteName(InviteActivitysuccess?.name)
      setInvite(InviteActivitysuccess?.value)
    }
  }, [InviteActivitysuccess]);

  useEffect(() => {
    if (TeamActivitysuccess) {
      setText(TeamActivitysuccess?.name)
      setActivity(TeamActivitysuccess?.value)
    }
  }, [TeamActivitysuccess]);

  useEffect(() => {
    if (PostActivitysuccess) {
      setPost(PostActivitysuccess?.value);
      setPostName(PostActivitysuccess?.name)
    }
  }, [PostActivitysuccess]);

  useEffect(() => {
    if (UpdateProfilesuccess) {
      setImageupload(UpdateProfilesuccess?.data?.image);
      // setImageuploadback(UpdateProfilesuccess?.data?.image);
    }
  }, [UpdateProfilesuccess]);

  useEffect(() => {
    if (AddTeamsuccess) {
      const time = new Date(new Date().getTime()+ 150000).toLocaleTimeString();
      AsyncStorage.setItem('sessionTime', time);
      dispatch({ type: 'addteam', payload: '' });
      navigation.navigate('InviteScreen');
    }
  }, [AddTeamsuccess]);

  const getToken = async () => {
    const logToken = await AsyncStorage.getItem('token');
    console.log('token...', logToken);
    setToken(logToken);
  };
  const openLibraryFunc = () => {
    ImagePicker.openPicker({
      cropping: false,
      width: 500,
      height: 500,
      cropperCircleOverlay: true,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      freeStyleCropEnabled: true,
      includeBase64: true,
    })
      .then(response => {
        console.log("response..", response);
        const sendData = {
          uri: response?.sourceURL,
          type: response?.mime,
          name: response?.filename
        }
        dispatch(UploadImageAction(sendData, token))
      })
      .catch(err => {
        console.log('openLibraryFunc err', err);
      });
  };


  const AddTeamApiCall = () => {
    if (teamname === '') {
      Alert.alert('Please enter team name');
    } else if (location === '') {
      Alert.alert('Please enter location');
    } else {
      //   setIsLoading(true);
      const sendData = {
        team_name: teamname,
        location: location,
        image: imageupload,
        team_activity: activity,
        who_can_post: post,
        invite: invite,
        team_notification: teamNotification,
        token: token,
      };
      console.log('sendData', sendData);
      dispatch(AddTeamAction(sendData));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerview}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.HeaderText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.HeaderText1}>Create Team</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={
                AddTeamApiCall
                // () => {
                //   navigation.navigate('InviteScreen');
                // }
              }>
              <Text style={styles.HeaderText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.backimageview}>
        <View style={{height:185,width:windowWidth}}>
        {/* <Image source={{uri: imageuploadback}} style={styles.backgroundImg} /> */}
        </View>
      </View>
      <View style={styles.cameraViewStyle}>
        <TouchableOpacity 
        // onPress={openLibraryFunc}
        >
          <Image style={styles.cameraStyle} source={camera} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileImgview}>
        <Image style={styles.profileImg} source={{uri: imageupload}} />
        <View style={styles.cameraViewStylePro}>
          <TouchableOpacity onPress={openLibraryFunc}>
            <Image style={styles.cameraStyleProfile} source={camera} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.drawLineModel}>
        <></>
      </View>
      <ScrollView>
        <View style={styles.inputView}>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={styles.textname}>Team Name</Text>
          </View>
          <View style={styles.textinputview}>
            <TextInput
              style={styles.textinputteam}
              value={teamname}
              onChangeText={text => {
                setTeamname(text);
              }}
            />
          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View style={styles.inputView}>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={styles.textname}>Location</Text>
          </View>
          <View style={styles.textinputview1}>
            <TextInput
              style={styles.textinputteam}
              value={location}
              onChangeText={text => {
                setLocation(text);
              }}
            />
          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View
          style={{height: 100, width: windowWidth, backgroundColor: '#f2f2f2'}}>
          <Text
            style={{
              fontSize: 13,
              marginTop: 10,
              margin: 5,
              padding: 5,
              textAlign: 'center',
              color: 'grey',
            }}>
            Anyone on TTnet can view the names of the Teams you are{'\n'}a part
            of. Only users invited to join a Team are able to view its contents.
          </Text>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TeamActivities');
          }}
          style={styles.rowButton}>
          <Text style={styles.textname}>Team Activities</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', fontSize: 16, alignSelf: 'center'}}>
              {text}
            </Text>
            <Image
              source={rightarrow}
              style={{
                tintColor: 'grey',
                height: 15,
                width: 15,
                alignSelf: 'center',
                marginLeft: 8,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WhoCanPost');
          }}
          style={styles.rowButton}>
          <Text style={styles.textname}>Who can post</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', fontSize: 16, alignSelf: 'center'}}>
              {postName}
            </Text>
            <Image
              source={rightarrow}
              style={{
                tintColor: 'grey',
                height: 15,
                width: 15,
                alignSelf: 'center',
                marginLeft: 8,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WhoCanInvite');
          }}
          style={styles.rowButton}>
          <Text style={styles.textname}>Who can invite others</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', fontSize: 16, alignSelf: 'center'}}>
              {inviteName}
            </Text>
            <Image
              source={rightarrow}
              style={{
                tintColor: 'grey',
                height: 15,
                width: 15,
                alignSelf: 'center',
                marginLeft: 8,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TeamNotification');
          }}
          style={styles.rowButton}>
          <Text style={styles.textname}>Team Notification</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={rightarrow}
              style={{
                tintColor: 'grey',
                height: 15,
                width: 15,
                alignSelf: 'center',
                marginLeft: 8,
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerview: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  profileImg: {
    height: 70,
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C2C9D1',
    borderRadius: 35,
  },
  profileImgview: {
    height: 70,
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#000',
    borderRadius: 35,
    tintColor: 'white',
    top: 185,
    position: 'absolute',
    left: windowWidth / 2 - 35,
  },
  cameraStyle: {
    height: 20,
    width: 20,
    alignItems: 'center',
    resizeMode: 'contain',
    tintColor: 'black',
  },
  cameraStyleProfile: {
    height: 20,
    width: 20,
    alignItems: 'center',
    resizeMode: 'contain',
    tintColor: 'black',
  },
  cameraViewStyle: {
    height: 30,
    width: 30,
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
    top: 180,
  },
  cameraViewStylePro: {
    height: 31,
    width: 31,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    position: 'absolute',
    justifyContent: 'center',
    top: 42,
    right: 0,
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: windowWidth,
    alignSelf: 'center',
  },
  HeaderText: {
    fontSize: 14,
    color: '#fff',
  },
  HeaderText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  backgroundImg: {
    height: 185,
  },
  drawLineModel: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: windowWidth,
    alignSelf: 'center',
    marginTop: 55,
  },
  textinput: {
    marginTop: 10,
  },
  textinputview: {
    width: 250,
    marginLeft: 23,
  },
  textinputview1: {
    width: 250,
    marginLeft: 45,
  },
  inputTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15,
    marginTop: 10,
  },
  textname: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  textinputteam: {
    paddingLeft: 10,
    color: 'grey',
    height: 50,
  },
  backimageview: {
    height: 185,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  inputView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 0.6,
    borderBottomColor: '#1E1E1E',
  },
});

export default CreateNewTeam;
