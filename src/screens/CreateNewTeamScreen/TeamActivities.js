import React, {useState,useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
  Dimensions,
} from 'react-native';
import profileImage from '../../../assets/images/user.png';
import Back from '../../../assets/images/back.png';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import selected from '../../../assets/images/checked.png';
import unSelected from '../../../assets/images/unselectedBtn.png';
import { useDispatch, useSelector } from 'react-redux';
import { TeamActivity } from '../../../redux/Actions/SignupAction';

const windowWidth = Dimensions.get('window').width;

const postArray = [
  {
    id: 1,
    label: 'Automatic',
    desc: `Activities that team members have recently done will automatically appear in the Team Activities section. Admins can prioritize specific activities by pinning them to the top of the list.`,
    desc2:`This will organically surface activities popular amaong the team, while keeping you in control.`,
    selected: true,
  },
  {
    id: 2,
    label: 'Pinned Only',
    desc:`Only activities pinned by Admins will appear in the Team Activities section.`,
    desc2:`Choose this if you want complete control over the activities team members can see.`,
    selected: false,
  },
];

const TeamActivities = ({navigation}) => {

  const dispatch = useDispatch();

  const TeamActivitysuccess = useSelector(state => state?.SignUpReducer?.TEAMACTRES);

  const [uiRender, setUirender] = React.useState(false);
  const [checked, setChecked] = useState('Automatic');
  const [automatic, setAutomatic] = useState('');
  const [value, setValue] = useState('0');

  useEffect(() => {
    if (TeamActivitysuccess) {
      for(let item of postArray){
        if(item.label === 'Automatic'){
          item.selected = true
        } else {
          item.selected = false
        }
      }
      setUirender(!uiRender);
    }
  }, []);

  useEffect(() => {
    if (TeamActivitysuccess) {
      for(let item of postArray){
        if(item.label === TeamActivitysuccess?.name){
          item.selected = true
        } else {
          item.selected = false
        }
      }
      setUirender(!uiRender);
    }
  }, [TeamActivitysuccess]);

  const selectFunc = data => {
    for (let item of postArray) {
      if (item.id === data.id) {
        item.selected = true;
        if(item.label === 'Pinned Only'){
          setValue('1');
          const sendData = {
            name: item.label,
            value : 1
          }
          dispatch(TeamActivity(sendData))
        }else{
          setValue('0');
          const sendData = {
            name: item.label,
            value : 0
          }
          dispatch(TeamActivity(sendData))
        }
      } else {
        item.selected = false;
      }
    }
    setUirender(!uiRender);
  };
  
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          backgroundColor: '#1E1E1E',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <Image style={{height: 30, width: 30}} source={Back} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 3,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text style={styles.HeaderText}>Create Team</Text>
          </View>
        </View>
      </View>
      <View style={styles.TitletxtView}>
        <Text style={styles.Titletxt}>Team Activities</Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.Titletxt1}>
          Control how activities appear on your
        </Text>
        <Text style={styles.Titletxt1}>Team page</Text>
      </View>
      <View style={styles.drawLine}>
        <></>
      </View>
      <View style={{paddingHorizontal: 15}}>
        {postArray.map((postItem, postIndex) => (
          <TouchableOpacity
            onPress={() => selectFunc(postItem)}
            style={{
              padding: 8,
              borderBottomColor: '#1E1E1E',
              borderBottomWidth: 0.6,
            }}
            key={postIndex}>
              <View style={{flexDirection:'row'}}>
            <View>
              {postItem.selected ? (
                <Image
                  source={selected}
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                />
              ) : (
                <Image
                  source={unSelected}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: 'grey',
                    resizeMode: 'contain',
                  }}
                />
              )}
            </View>
            <Text style={styles.RadiobtnTxt}>{postItem.label}</Text>
            </View>
            <View>
            <Text style={styles.descTxt}>{postItem.desc}</Text>
            <Text style={styles.descTxt}>{postItem.desc2}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  HeaderText: {
    fontSize: 15,
    padding: 10,
    marginLeft: 5,
    padding: 5,
    color:'white'
  },
  TitletxtView: {
    marginTop: 10,
  },
  RadiobtnTxt: {
    fontSize: 16,
    padding: 10,
    padding: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  TitletxtView: {
    marginTop: 10,
    height: 50,
  },
  Titletxt: {
    paddingLeft: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  Titletxt1: {
    paddingLeft: 20,
    fontSize: 17,
    fontWeight: '400',
    color: 'grey',
    padding: 0,
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: 360,
    marginTop: 13,
    alignSelf: 'center',
  },
  RadioButton: {
    height: 40,
    width: 40,
  },
  txtheading: {
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 5,
  },
  txtheading2: {
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 5,
    marginTop: 10,
  },
  descTxt:{
    color:'grey',
    fontSize:12,
    marginLeft:30,
    marginTop:6
  },
});

export default TeamActivities;
