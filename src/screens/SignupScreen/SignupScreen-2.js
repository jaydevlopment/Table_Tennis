import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Button from '../../components/CustomButton/Button';
import backImg from '../../../assets/images/back.png';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {StepTwoData} from '../../../redux/Actions/SignupAction';

const SignUpScreen2 = ({navigation}) => {
  const StepOneResData = useSelector(state => state?.SignUpReducer?.STEPONERES);
  console.log('StepOneResData...', StepOneResData);
  const StepTwoResData = useSelector( state => state?.SignUpReducer?.STEPTWORES );
  console.log("StepTwoResData...",StepTwoResData)

  const dispatch = useDispatch();
  const [role, setRole] = useState('');
  const [errorField, setErrorField] = useState(false);
  const [signup2Data, setSignup2Data] = useState({
    height: '',
    grip: '',
    hand: '',
    playingstyle: '',
    career: '',
    achievements: '',
    team: '',
    club: '',
    favoriteserve: '',
    awards: '',
    tournamentPlayed: '',
  });

  const HEIGHT_REQUIRED = 'height is required';
  const GRIP_REQUIRED = 'grip is required';
  const HAND_REQUIRED = 'hand is required';
  const PLAYINGSTYLE_REQUIRED = 'playing style is required';
  const FAVORATESERVE_REQUIRE = 'favorite serve select a role';

  useFocusEffect(
    React.useCallback(() => {
      
    }, []),
  );

  useEffect(() => {
    if (StepOneResData) {
      setRole(StepOneResData?.role);
    }
  }, [StepOneResData]);

  useEffect(() => {
    if (StepTwoResData) {
      setSignup2Data({
        height: StepTwoResData ? StepTwoResData?.height : '',
        grip: StepTwoResData ? StepTwoResData?.grip : '',
        hand: StepTwoResData ? StepTwoResData?.hand : '',
        playingstyle: StepTwoResData ? StepTwoResData?.playingstyle : '',
        career: StepTwoResData ? StepTwoResData?.career : '',
        achievements: StepTwoResData ? StepTwoResData?.achievements : '',
        team: StepTwoResData ? StepTwoResData?.team : '',
        club: StepTwoResData ? StepTwoResData?.club : '',
        favoriteserve: StepTwoResData ? StepTwoResData?.favoriteserve : '',
        awards: StepTwoResData ? StepTwoResData?.awards : '',
        tournamentPlayed: StepTwoResData ? StepTwoResData?.tournamentPlayed : '',
      })
    }
  }, [StepTwoResData]);


  const goToStepThree = async () => {
    if (
      !signup2Data.height.length > 0 ||
      !signup2Data.grip.length > 0 ||
      !signup2Data.hand.length > 0 ||
      !signup2Data.playingstyle > 0 ||
      !signup2Data.favoriteserve.length > 0
    ) {
      setErrorField(true);
    } else {
      setErrorField(false);
      dispatch(StepTwoData(signup2Data));
      navigation.push('Signup3');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          <Text style={styles.toolbarTxt}>Step 2</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          style={{marginTop: 10}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.signupForm}>
            <Text style={styles.inputTitleStyle}>Height *</Text>
            <View
              style={[
                styles.txtinpView,
                {
                  borderColor:
                    !signup2Data.height.length > 0 && errorField
                      ? 'red'
                      : '#C0C0C0',
                },
              ]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.height}
                style={styles.txtinp}
                onChangeText={text => {
                  setSignup2Data({
                    ...signup2Data,
                    height: text,
                  })
                }
                }
                placeholder=" Enter your height (feet)"
                keyboardType="numeric"
                maxLength={3}
              />
            </View>
            {errorField && !signup2Data.height.length > 0 && (
              <Text
                style={{
                  color: 'red',
                  marginLeft: 20,
                }}>
                {HEIGHT_REQUIRED}
              </Text>
            )}
            <Text style={styles.inputTitleStyle}>Grip *</Text>
            <View
              style={[
                styles.txtinpView,
                {
                  borderColor:
                    !signup2Data.grip.length > 0 && errorField
                      ? 'red'
                      : '#C0C0C0',
                },
              ]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.grip}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    grip: text,
                  })
                }
                placeholder=" Enter your grip"
              />
            </View>
            {errorField && !signup2Data.grip.length > 0 && (
              <Text
                style={{
                  color: 'red',
                  marginLeft: 20,
                }}>
                {GRIP_REQUIRED}
              </Text>
            )}
            <Text style={styles.inputTitleStyle}>Hand *</Text>
            <View
              style={[
                styles.txtinpView,
                {
                  borderColor:
                    !signup2Data.hand.length > 0 && errorField
                      ? 'red'
                      : '#C0C0C0',
                },
              ]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.hand}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    hand: text,
                  })
                }
                placeholder=" e.g. right or left"
              />
            </View>
            {errorField && !signup2Data.hand.length > 0 && (
              <Text
                style={{
                  color: 'red',
                  marginLeft: 20,
                }}>
                {HAND_REQUIRED}
              </Text>
            )}
            <Text style={styles.inputTitleStyle}>Playing Style *</Text>
            <View
              style={[
                styles.txtinpView,
                {
                  borderColor:
                    !signup2Data.playingstyle.length > 0 && errorField
                      ? 'red'
                      : '#C0C0C0',
                },
              ]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.playingstyle}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    playingstyle: text,
                  })
                }
                placeholder=" Enter your playing style"
              />
            </View>
            {errorField && !signup2Data.playingstyle.length > 0 && (
              <Text
                style={{
                  color: 'red',
                  marginLeft: 20,
                }}>
                {PLAYINGSTYLE_REQUIRED}
              </Text>
            )}
            <Text style={styles.inputTitleStyle}>Career (optional)</Text>
            <View style={[styles.txtinpView, {borderColor: 'grey'}]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.career}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    career: text,
                  })
                }
                placeholder=" Career..."
              />
            </View>
            <Text style={styles.inputTitleStyle}>Achievement (optional)</Text>
            <View style={[styles.txtinpView, {borderColor: 'grey'}]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.achievement}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    achievement: text,
                  })
                }
                placeholder=" Enter your achievement"
              />
            </View>
            <Text style={styles.inputTitleStyle}>Team (optional)</Text>
            <View style={[styles.txtinpView, {borderColor: 'grey'}]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.team}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    team: text,
                  })
                }
                placeholder=" Enter your team"
              />
            </View>
            <Text style={styles.inputTitleStyle}>Club (optional)</Text>
            <View style={[styles.txtinpView, {borderColor: 'grey'}]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.club}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    club: text,
                  })
                }
                placeholder=" Enter your club"
              />
            </View>
            <Text style={styles.inputTitleStyle}>Favourite Serve *</Text>
            <View
              style={[
                styles.txtinpView,
                {
                  borderColor:
                    !signup2Data.favoriteserve.length > 0 && errorField
                      ? 'red'
                      : '#C0C0C0',
                },
              ]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.favoriteserve}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    favoriteserve: text,
                  })
                }
                placeholder=" Favorite Server"
              />
            </View>
            {errorField && !signup2Data.favoriteserve.length > 0 && (
              <Text
                style={{
                  color: 'red',
                  marginLeft: 20,
                }}>
                {FAVORATESERVE_REQUIRE}
              </Text>
            )}
            <Text style={styles.inputTitleStyle}>Awards (optional)</Text>
            <View style={[styles.txtinpView, {borderColor: 'grey'}]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.awards}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    awards: text,
                  })
                }
                placeholder=" Awards"
              />
            </View>
            {role === 'player' ? 
            <View>
            <Text style={styles.inputTitleStyle}>
              Tournament Played (optional)
            </Text>
            <View style={[styles.txtinpView, {borderColor: 'grey'}]}>
              <TextInput
                placeholderTextColor="grey"
                value={signup2Data.tournamentPlayed}
                style={styles.txtinp}
                onChangeText={text =>
                  setSignup2Data({
                    ...signup2Data,
                    tournamentPlayed: text,
                  })
                }
                placeholder=" Tournament Played"
              />
            </View>
            </View> : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button label="Next >>>" onPress={goToStepThree} />
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
  container: {
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 5,
  },
  headercontent: {
    justifyContent: 'flex-start',
  },
  SignUpsty: {
    marginHorizontal: 110,
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
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#fff',
    paddingLeft: 18,
  },
  txtinp: {
    height: 50,
    color: '#fff',
  },
  txtinpView: {
    height: 50,
    fontSize: 15,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    padding: 12,
    color: '#fff',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
});

export default SignUpScreen2;
