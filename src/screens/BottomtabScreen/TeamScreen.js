import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import profileImage from '../../../assets/images/user.png';
import bell from '../../../assets/images/bell.png';
import dots from '../../../assets/images/dots.png';
import search from '../../../assets/images/search.png';
import Profile from '../../../assets/images/userprofile.png';
import Increase from '../../../assets/images/increase.png';
import Video from '../../../assets/images/play-button.png';
import Team from '../../../assets/images/follower.png';
import SkillRatings from '../Materialtopnavigator/SkillsRatings';
import CreateteamTop from '../Materialtopnavigator/CreateteamTop';
import Profiletop from '../Materialtopnavigator/Profiletop';
import VideoScreen from '../Materialtopnavigator/VideoScreen';
import { useSelector } from 'react-redux';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TeamScreen = ({navigation}) => {


  const userDetailssuccessres = useSelector(
    state => state?.userDetailsReducer?.USERDETAILSRES,
  );
  const details = userDetailssuccessres?.data
  const [activeTab, setActiveTab] = useState('skillRating');

  const switchTab = (currentTab) => setActiveTab(currentTab);
  

  const renderCall = () => {
    if (activeTab === 'skillRating') {
      return <SkillRatings />
    } else if (activeTab === 'videoScreen') {
      return <VideoScreen />;
    } else if (activeTab === 'teamScreen') {
      return <CreateteamTop navigation={navigation} />;
    } else if (activeTab === 'profileScreen') {
      return <Profiletop navigation={navigation}/>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.bellstyle} source={bell} />
        <Image style={styles.dotsstyle} source={dots} />
      </View>
      <View
        style={styles.imagebagView}>
        <View style={styles.profileImgview}>
          <Image style={styles.profileImg} source={profileImage} />
          <View style={styles.nameView}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                margin: 10,
                fontSize: 18,
              }}>
              {details?.name}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.toptabs}>
        <View style={styles.row}>
          <TouchableOpacity  onPress={() => {switchTab('skillRating')}}>
        <View style={activeTab === 'skillRating' ? styles.imageViewTop : styles.imageViewTop1}><Image source={Increase} style={activeTab === 'skillRating' ? styles.toptabsimage : styles.toptabsimage1} /></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {switchTab('videoScreen')}}>
        <View style={activeTab === 'videoScreen' ? styles.imageViewTop : styles.imageViewTop1}><Image source={Video} style={activeTab === 'videoScreen' ? styles.toptabsimage : styles.toptabsimage1} /></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {switchTab('teamScreen')}}>
        <View style={activeTab === 'teamScreen' ? styles.imageViewTop : styles.imageViewTop1}><Image source={Team} style={activeTab === 'teamScreen' ? styles.toptabsimage : styles.toptabsimage1} /></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {switchTab('profileScreen')}}>
        <View style={activeTab === 'profileScreen' ? styles.imageViewTop : styles.imageViewTop1}><Image source={Profile} style={activeTab === 'profileScreen' ? styles.toptabsimage : styles.toptabsimage1} /></View>
        </TouchableOpacity>
        </View>
      </View>
      {renderCall()}
      {/* <View
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 0.6,
          width: '100%',
          marginTop: 10,
          alignSelf: 'center',
        }}>
        <></>
      </View> */}
      {/* <ScrollView>
      <View
        style={{
          height: 30,
          backgroundColor: '#1E1E1E',
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            paddingLeft: 10,
          }}>
          Teams
        </Text>
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
                marginLeft: 10,
                marginTop: -7,
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
          <View
            style={{
              height: 35,
              width: 300,
              backgroundColor: '#1E1E1E',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginLeft: 25,
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color:'#fff'}}>
              + Create a new team
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: 30,
            backgroundColor: '#1E1E1E',
            marginTop: 30,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              paddingLeft: 10,
            }}>
            Connections
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            borderColor: '#C2C9D1',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            marginLeft: 10,
          }}>
          <TouchableOpacity>
            <Image style={styles.searchstyle} source={search} />
          </TouchableOpacity>
        </View>
      </ScrollView> */}
      {/* <Modal
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
                onPress={OntoggleModal}>
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
                  navigation.navigate('');
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
      </Modal> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bellstyle: {
    height: 22,
    width: 22,
    tintColor: '#fff',
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  dotsstyle: {
    height: 22,
    width: 22,
    tintColor: '#fff',
    resizeMode: 'contain',
    marginRight: 10,
  },
  profileImg: {
    height: 70,
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C2C9D1',
    borderRadius: 35,
    tintColor: 'white',
  },
  searchstyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: '#C2C9D1',
  },
  profileImgview: {
    height: 70,
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 35,
    tintColor: 'white',
    marginBottom: 10,
    marginTop: 14,
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: 330,
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
  toptabs:{
    backgroundColor:'#1E1E1E',
    height:50,
    width: windowWidth,  
  },
  row:{
    flexDirection: 'row',
    alignItems:'center',
  },
  imageViewTop:{
    justifyContent:'center',
    alignItems:'center',
    height:50,
    width:windowWidth/4,
    // backgroundColor:'#fff',
    borderBottomWidth:3,
    borderColor:'white',
    margin:1
  },
  imageViewTop1:{
    justifyContent:'center',
    alignItems:'center',
    height:50,
    width:windowWidth/4,
    // backgroundColor:'#fff',
    margin:1
  },
  toptabsimage:{
    resizeMode:'contain',
    height:25,
    width:25,
    tintColor:'white'
  },
  toptabsimage1:{
    resizeMode:'contain',
    height:25,
    width:25,
    tintColor:'grey'
  },
  imagebagView:{
    height: 150,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  }
});

export default TeamScreen;
