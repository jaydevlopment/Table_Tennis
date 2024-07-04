import React, { useState } from 'react';
import { View, Image, Switch, StyleSheet, TouchableOpacity, Text, ScrollView, Modal, Pressable, TextInput } from 'react-native';
import Back from '../../../assets/images/back.png';



const TeamNotification = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(true);
    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={{ height: 45, justifyContent: 'center', backgroundColor: "#1E1E1E", }} >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity  onPress={()=> {navigation.navigate("CreateNewTeam")}}>
                        <Image style={{ height: 30, width: 30, marginLeft: 10, }} source={Back} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>Back</Text>
                </View>
            </View>
            <View style={styles.TitletxtView}>
                <Text style={styles.Titletxt}>Team Notifications</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.Titletxt1}>Control the types of notifications team</Text>
                <Text style={styles.Titletxt1}>members receive.</Text>
            </View>
            <View style={styles.drawLine}>
                <></>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', height: 35, width:200 }}>
                        <Text style={styles.RadiobtnTxt}>Workout Completion</Text>
                    </View>
                    <View style={{justifyContent: 'center', height: 40, marginLeft:'30%'}}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#00ff00" }}
                            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={{ height: 35, width: 295,marginTop:-5 }}>
                    <Text style={styles.txtheading}>Members are notified when others complete a workout.</Text>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', height: 35, width:200 }}>
                        <Text style={styles.RadiobtnTxt}>New Post</Text>
                    </View>
                    <View style={{justifyContent: 'center', height: 40, marginLeft:'30%'}}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#00ff00" }}
                            thumbColor={isEnabled1 ? "#fff" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                </View>
                <View style={{ height: 35, width: 295,marginTop:-5 }}>
                    <Text style={styles.txtheading}>Members are notified when others create a new post.</Text>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
            </View>
            <View style={{height:60,width:330,justifyContent:'center',alignItems:'center',marginTop:10,marginHorizontal:15}}> 
                <Text style={styles.txtheading3}>Members can still turn off the notificatios for their</Text>
                <Text style={styles.txtheading3}>individual account.</Text>
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
        padding: 10,
        marginLeft: 5,
        padding: 5,
    },
    TitletxtView: {
        marginTop: 10
    },
    RadiobtnTxt: {
        fontSize: 16,
        padding: 5,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft:15
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
        width: 360,
        marginTop: 13,
        alignSelf: 'center',
    },
    RadioButton: {
        height: 40,
        width: 40
    },
    txtheading: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
        paddingLeft: 15
    },
    txtheading2: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
        paddingLeft: 5,
        marginTop: 10
    },
    txtheading3: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
        paddingLeft: 5,
    },
});

export default TeamNotification;
