import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView, Modal, Pressable, TextInput, Dimensions } from 'react-native';
import profileImage from '../../../assets/images/user.png';
import Back from '../../../assets/images/back.png';
import { RadioButton } from 'react-native-paper';
import selected from '../../../assets/images/checked.png';
import unSelected from '../../../assets/images/unselectedBtn.png';
import {PostActivity} from '../../../redux/Actions/SignupAction';
import {useDispatch, useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

const postArray = [
    {
        id: 0,
        label: 'All Members',
        value: 'All Members',
        selected: true,
    },
    {
      id: 1,
      label: 'Admins Only',
      value: 'Admins Only',
      selected: false,
    }
  ];


const WhoCanPost = ({navigation}) => {
    const PostActivitysuccess = useSelector(state => state?.SignUpReducer?.POSTACTRES);
    const dispatch = useDispatch();
    const [uiRender, setUirender] = React.useState(false);

    useEffect(() => {
        if (PostActivitysuccess) {
          for(let item of postArray){
            if(item.label === 'All Members'){
              item.selected = true
            } else {
              item.selected = false
            }
          }
          setUirender(!uiRender);
        }
      }, []);
    
      useEffect(() => {
        if (PostActivitysuccess) {
          for(let item of postArray){
            if(item.label === PostActivitysuccess?.name){
              item.selected = true
            } else {
              item.selected = false
            }
          }
          setUirender(!uiRender);
        }
      }, [PostActivitysuccess]);

    const selectFunc = data => {
        for (let item of postArray) {
          if (item.id === data.id) {
            item.selected = true;
            if(item.label === 'All Members'){
              const sendData = {
                name: item.label,
                value : 0
              }
              dispatch(PostActivity(sendData))
            }else{
              const sendData = {
                name: item.label,
                value : 1
              }
              dispatch(PostActivity(sendData))
            }
          } else {
            item.selected = false;
          }
        }
        setUirender(!uiRender);
      };

    return (
        <View style={styles.container}>
            <View style={{ height: 50, justifyContent: 'center', backgroundColor: "#1E1E1E", }} >
                <View style={{flexDirection:'row',}}>
                    <View style={{flex:0.5, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=> {navigation.navigate("CreateNewTeam")}}>
                        <Image style={{ height: 30, width: 30 }} source={Back} />
                    </TouchableOpacity>
                    </View>
                    <View style={{flex:3, alignItems:'flex-start', justifyContent:'center'}}>
                        <Text style={styles.HeaderText}>Create Team</Text>
                    </View>
                </View>
            </View>
            <View style={styles.TitletxtView}>
                <Text style={styles.Titletxt}>Who can post</Text>
            </View>
            <View style={styles.drawLine}>
                    <></>
                </View>
            <View style={{paddingHorizontal:15}}>
            {postArray.map((postItem, postIndex) => (
                <TouchableOpacity 
                onPress={() => selectFunc(postItem)}
                style={{
                    flexDirection:'row',
                    padding:8,
                    borderBottomColor:'#1E1E1E',
                    borderBottomWidth: 0.6,
                }} key={postIndex}>
                    <View>
                    {postItem.selected ?
                    <Image source={selected} style={{height:25, width:25, resizeMode:'contain',}} />: 
                    <Image source={unSelected} style={{height:25, width:25, tintColor:'grey', resizeMode:'contain'}} />}
                    </View>
                    <Text style={styles.RadiobtnTxt}>{postItem.label}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    HeaderText: {
        fontSize: 15,
        color:'#fff'
    },
    TitletxtView: {
        marginTop: 10,
        height:50
    },
    RadiobtnTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        alignSelf:'center',
        marginLeft:10
    },
    Titletxt: {
        paddingLeft: 20,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    Titletxt1: {
        paddingLeft: 20,
        fontSize: 17,
        fontWeight: '400',
        color: 'grey',
        padding: 0
    },
    drawLine: {
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: 0.6,
        width: windowWidth - 30,
        marginTop: 13,
        alignSelf: 'center',
    },
    RadioButton: {
        height: 40,
        width: 40
    },
    txtheading: {
        fontSize: 13,
        fontWeight: '500',
        color: 'grey',
        paddingLeft: 5
    },
    txtheading2: {
        fontSize: 13,
        fontWeight: '500',
        color: 'grey',
        paddingLeft: 5,
        marginTop: 10
    },
});

export default WhoCanPost;
