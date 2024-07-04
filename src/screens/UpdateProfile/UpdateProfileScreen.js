import React, { useEffect, useState } from 'react';
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
    KeyboardAvoidingView,
} from 'react-native';

import camera from '../../../assets/images/camera.png';
import rightarrow from '../../../assets/images/right-arrow.png';

import { AddTeamAction } from '../../../redux/Actions/AddTeamAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import { UploadImageAction } from '../../../redux/Actions/UploadImageAction'
import { updateProfileAction } from '../../../redux/Actions/updateProfileAction';

const windowWidth = Dimensions.get('window').width;

const UpdateProfileScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const userDetailssuccessres = useSelector(
        state => state?.userDetailsReducer?.USERDETAILSRES,
      );
      const userDetailsUpdatesuccessres = useSelector(
        state => state?.updateProfileReducer?.UPDATEPROFILERES,
      );
      console.log('userDetailssuccessres....', userDetailsUpdatesuccessres);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [nationality, setNationality] = useState("");
    const [achievements, setAchievements] = useState("");
    const [career, setCareer] = useState("");
    const [phone, setPhone] = useState("");
    const [hand, setHand] = useState("");
    const [playingstyle, setPlayingstyle] = useState("");
    const [grip, setGrip] = useState("");
    const [team, setTeam] = useState("");
    const [club, setClub] = useState("");
    const [favoriteserve, setfavoriteserve] = useState("");
    const [awards, setAwards] = useState("");
    const [tournamentplayed, setTournamentplayed] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [token, setToken] = useState('');
    const [user_role, setUserRole] = useState('')

    useFocusEffect(
        React.useCallback(() => {
            getToken();
        }, []),
    );

    useEffect(()=>{
        if(userDetailssuccessres){
            setName(userDetailssuccessres?.data?.name)
            setUsername(userDetailssuccessres?.data?.username)
            setGender(userDetailssuccessres?.data?.gender)
            setEmail(userDetailssuccessres?.data?.email)
            setNationality(userDetailssuccessres?.data?.nationality)
            setAchievements(userDetailssuccessres?.data?.achievements)
            setCareer(userDetailssuccessres?.data?.career)
            setPhone(userDetailssuccessres?.data?.phone)
            setHand(userDetailssuccessres?.data?.hand)
            setPlayingstyle(userDetailssuccessres?.data?.playing_style)
            setGrip(userDetailssuccessres?.data?.grip)
            setTeam(userDetailssuccessres?.data?.team)
            setClub(userDetailssuccessres?.data?.club)
            setfavoriteserve(userDetailssuccessres?.data?.favorite_serve)
            setAddress1(userDetailssuccessres?.data?.street_address1)
            setAddress2(userDetailssuccessres?.data?.street_address2)
            setZipcode(userDetailssuccessres?.data?.zip_code)
            setAwards(userDetailssuccessres?.data?.awards)
            setTournamentplayed(userDetailssuccessres?.data?.tournament_played)
        }
    }, [userDetailssuccessres])
   
    useEffect(()=>{
        if(userDetailsUpdatesuccessres){
            if(user_role){
                if (user_role === 'player') {
                  navigation.navigate('PlayerTabs',{
                    screen:'TeamScreen'
                  });
                } else if (user_role === 'coach') {
                  navigation.navigate('CoachTabs',{
                    screen:'TeamScreen'
                  });
                } 
            }
        }
    }, [userDetailsUpdatesuccessres])

    const getToken = async () => {
        const logToken = await AsyncStorage.getItem('token');
        const user_Type = await AsyncStorage.getItem('roleType');
        setToken(logToken);
        setUserRole(user_Type);
    };

    const UpdateProfileApicall = async () => {
        // setIsLoading(true);
        const sendData = {
            token: token,
            name: name,
            username: username,
            gender: gender,
            email: email,
            nationality: nationality,
            achievements: achievements,
            career: career,
            phone: phone,
            hand: hand,
            playing_style: playingstyle,
            grip: grip,
            team: team,
            club: club,
            favorite_serve: favoriteserve,
            awards: awards,
            tournament_played: tournamentplayed,
            street_address1: address1,
            street_address2: address2,
            zip_code: zipcode,
        };
        console.log('sendData', sendData);
        dispatch(updateProfileAction(sendData));
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerview}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                        <Text style={styles.HeaderText1}>Profile</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <TouchableOpacity onPress={UpdateProfileApicall}>
                            <Text style={styles.HeaderText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
                behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView>
                    <View style={styles.backimageview}>
                        <View style={styles.profileImgview}>
                        </View>
                        <View style={styles.addphotobtn}>
                            <TouchableOpacity>
                                <Text style={styles.addphototxt}>ADD PHOTO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.drawLineModel}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Name</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={name}
                                onChangeText={text => {
                                    setName(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Username</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={username}
                                onChangeText={text => {
                                    setUsername(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Email</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={email}
                                onChangeText={text => {
                                    setEmail(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Phone Number</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                keyboardType="numeric"
                                maxLength={10}
                                value={phone}
                                onChangeText={text => {
                                    setPhone(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Address 1</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={address1}
                                onChangeText={text => {
                                    setAddress1(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Address 1</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={address2}
                                onChangeText={text => {
                                    setAddress2(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Zip code</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={zipcode}
                                onChangeText={text => {
                                    setZipcode(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Gender</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={gender}
                                onChangeText={text => {
                                    setGender(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Grip</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={grip}
                                onChangeText={text => {
                                    setGrip(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                     <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Hand</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={hand}
                                onChangeText={text => {
                                    setHand(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Playing Style</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={playingstyle}
                                onChangeText={text => {
                                    setPlayingstyle(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Career</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={career}
                                onChangeText={text => {
                                    setCareer(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Achievement</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={achievements}
                                onChangeText={text => {
                                    setAchievements(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Nationality</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={nationality}
                                onChangeText={text => {
                                    setNationality(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Team</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={team}
                                onChangeText={text => {
                                    setTeam(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Club</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={club}
                                onChangeText={text => {
                                    setClub(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Favorite serve</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={favoriteserve}
                                onChangeText={text => {
                                    setfavoriteserve(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Awards</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={awards}
                                onChangeText={text => {
                                    setAwards(text);
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                    { user_role === 'player' && 
                        <View style={styles.inputView}>
                        <View style={styles.inputboxrow}>
                            <Text style={styles.textname}>Tournament Played</Text>
                        </View>
                        <View style={styles.textinputview}>
                            <TextInput
                                style={styles.textinputteam}
                                value={tournamentplayed}
                                onChangeText={text => {
                                    setTournamentplayed(text);
                                }}
                            />
                        </View>
                    </View>}
                    <View style={styles.drawLine}>
                        <></>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
    profileImgview: {
        height: 90,
        width: 90,
        backgroundColor: '#000',
        borderRadius: 45,
    },
    addphotobtn: {
        height: 30,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
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
        height: 160,
        width: windowWidth,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.6,
        borderColor: 'grey'
    },
    addphototxt: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '600'
    },
    drawLine: {
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: 0.6,
        width: windowWidth,
        alignSelf: 'center',
    },
    drawLineModel: {
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: 0.6,
        width: windowWidth,
        alignSelf: 'center',
    },
    textinput: {
        marginTop: 10,
    },
    textinputview: {
        width: windowWidth,
        // backgroundColor: 'red'
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
    inputView: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
    },
    inputboxrow: {
        justifyContent: 'center',
        // backgroundColor: 'blue',
        width: windowWidth / 2.5,
        paddingLeft: 15
    },
});

export default UpdateProfileScreen;
