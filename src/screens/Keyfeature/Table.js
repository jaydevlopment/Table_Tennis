import React from "react"
import { ScrollView, Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native"
import image from '../../../assets/images/OTPcode.png';
import Tenis from '../../../assets/images/tablekey.png'
import Datacard from '../../components/Featurekeydatacard/keydata'
import backImg from '../../../assets/images/back.png';


const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const Table = ({ navigation }) => {

    const imgs = [image, image, image, image, image, image, image];
    return (
        <View style={styles.mainContainer}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={backImg} style={styles.imgBtn} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Image style={styles.timage} source={Tenis} />
                    <View style={styles.viewimagetext}>
                        <Text style={{ fontSize: 30, color: 'white', marginLeft: -330, fontWeight: 'bold' }}>Table</Text>
                        <Text style={styles.imgviewtext}>
                            Keep your game in top shape with training activities inspired by top Shots athletes.
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginVertical:'10%'}}>
                <View style={{ height: 30, width: 80, borderRadius: 5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', margin: 16 }} >
                    <TouchableOpacity onPress={() => {navigation.navigate('State') }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }} >STATE</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 30, width: 80,marginHorizontal:'52%', borderRadius: 5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', margin: 16 }} >
                    <TouchableOpacity  onPress={() => {navigation.navigate('Graph') }} >
                        <Text style={{ fontWeight: 'bold', color: 'white' }} >GRAPH</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{marginTop:-75}}>
                <View style={styles.carousal}>
                    <Text style={styles.txtTraining}> Tennis Table Videos</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.coachThumbnail}>

                            {imgs.map((src, index) => (
                                <Datacard key={index} thumbnail={src} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.carousal}>
                    <Text style={styles.txtTraining}>Table  Videos</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.coachThumbnail}>
                            {imgs.map((src, index) => (
                                <Datacard key={index} thumbnail={src} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000',
        height: '100%',
    },
    viewimagetext: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 190
    },
    timage: {
        opacity: 0.3,
        top: 15,
        marginHorizontal: 140,
        height: 300,
        width: 300
    },

    imgviewtext: {
        fontSize: 18,
        color: 'white'
    },
    imgBtn: {
        height: 30,
        width: 30,
        top: 18,
        marginLeft: 7
    },
    // drawLine: {
    //     borderBottomColor: '#C2C9D1',
    //     borderBottomWidth: 0.9,
    //     width: 300,
    //     marginTop: 25,
    //     alignSelf: 'center',
    // },
    carousal: {
        height: 180,
    },
    coachThumbnail: {
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    txtTraining: {
        color: 'white',
        marginHorizontal: 10,
        marginTop: 30,
        marginBottom: 7,
        fontWeight: 'bold',
        fontSize: 20,
    },
    // articles: {
    //     alignItems: 'center',
    //     alignSelf: 'center',
    // },
    // addBtn: {
    //     backgroundColor: 'white',
    // },
    // mainCard: {
    //     width: widthScreen,
    //     alignSelf: 'center',
    //     height: heightScreen,
    //     // paddingBottom: 20,
    //     // paddingLeft: 100,
    //     // paddingRight: 50,
    // },
    // internalCard: {
    //     alignSelf: 'center',
    //     height: 120,
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     flexDirection: 'row',
    //     borderColor: '#C2C9D1',
    //     marginVertical: 15,
    //     padding: 5
    // },
    articleThumbnail: {
        height: 30,
        width: 30,
        // alignSelf: 'center',
        resizeMode: 'contain',
        tintColor: 'white',
    },
    articleTxt: {
        width: widthScreen / 1.6,
        // backgroundColor:'red'
    },
    textHeading: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    txtBody: {
        color: 'grey',
        fontSize: 12,
        textAlign: 'left',
        flexWrap: 'wrap',
        flexShrink: 1,
        paddingLeft: 5
    },
    AdminvidView: {
        height: 80,
        width: widthScreen / 3,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
export default Table;