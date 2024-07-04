import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Alert,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown-deprecated-support';
import backImg from '../../../assets/images/back.png';
import Button from '../../components/CustomButton/Button';
import DatePicker from 'react-native-datepicker';
import d from '../../../assets/images/hide.png';
import visibleImage from '../../../assets/images/shows.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {CountryListAction} from '../../../redux/Actions/CountryListAction';
import {StepOneData} from '../../../redux/Actions/SignupAction';
import {useFocusEffect} from '@react-navigation/native';

const radioButtonsData = [
  {
    id: 1,
    label: 'Male',
    value: 'male',
    selected: false,
  },
  {
    id: 2,
    label: 'Female',
    value: 'female',
    selected: false,
  },
  {
    id: 3,
    label: 'Others',
    value: 'others',
    selected: false,
  },
];

const SignUpScreen1 = ({navigation}) => {
  
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [uiRender, setUiRender] = useState(false);
  const [image, setImage] = useState(false);
  const [errorField, setErrorField] = useState(false);
  const [roleItems, setRoleItems] = useState([
    {label: 'Coach', value: 'coach'},
    {label: 'Player', value: 'player'},
    {label: 'User', value: 'user'},
  ]);
  const [countryItems, setCountryItems] = useState([
    // {label: 'Coach', name: 'india'},
  ]);
  const [signup1Data, setSignup1Data] = useState({
    fullName: '',
    username: '',
    role: '',
    nationality: '',
    email: '',
    password: '',
    cnfpassword: '',
    dob: '',
    gender: '',
    phone: '',
  });

  const EMAIL_REQUIRED = 'Email is required';
  const EMAIL_VALIDATION = 'Please enter valid email';
  const FULLNAME_REQUIRED = 'Fullname is required';
  const USERNAME_REQUIRED = 'Username is required';
  const ROLE_REQUIRED = 'Please select a role';
  const NATIONALITY_REQUIRED = 'Nationality is required';
  const PASSWORD_REQUIRED = 'Password is required';
  const PASSWORD_VALIDATION =
    'Your password must be more than 8 characters long should contain at-least 1 Uppercase, 1 Lowecase, 1 Numeric and 1 Special character';
  const CONFIRMPASSWORD_VALIDATION = 'Confirm password does not match';
  const CONFIRMPASSWORD_REQUIRED = 'Confirm password does not match';
  const DOB_REQUIRED = 'DOB is required';
  const GENDER_REQUIRED = 'Gender is required';
  const PHONENUMBER_REQUIRED = 'Phone number is required';

  const CountryListSuccessres = useSelector(
    state => state?.CountryListReducer?.COUNTRYLISTRES,
  );
  // console.log('CountryListSuccessres', CountryListSuccessres);

  useEffect(() => {
    for(let item of radioButtonsData){
      item.selected = false;
    }
  }, []);

  useEffect(() => {
    if (CountryListSuccessres) {
      setCountryItems(CountryListSuccessres?.data);
    }
  }, [CountryListSuccessres]);

  useEffect(() => {
    GetCountryListApicall();
  }, []);

  const radioButtonCalled = val => {
    for (let item of radioButtonsData) {
      if (item.id === val.id) {
        if (item.selected === false) {
          item.selected = true;
          setSignup1Data({
            ...signup1Data,
            gender: val.value,
          });
        }
      } else {
        item.selected = false;
      }
    }
    setUiRender(!uiRender);
  };
  
  const GetCountryListApicall = () => {
    dispatch(CountryListAction());
  };

  const onSelectRole = (idx, option) => {
    setSignup1Data({
      ...signup1Data,
      role: option.value,
    });
  };
  const Onselect = (idx, option) => {
    setSignup1Data({
      ...signup1Data,
      nationality: option.name,
    });
  };

  const goToStepTwo = async () => {
    if (
      !signup1Data.fullName.length > 0 ||
      !signup1Data.username.length > 0 ||
      !signup1Data.role.length > 0 ||
      !signup1Data.nationality > 0 ||
      !signup1Data.email.length > 0 ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(signup1Data.email) ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        signup1Data.password,
      ) ||
      !signup1Data.cnfpassword.length > 0 ||
      signup1Data.password !== signup1Data.cnfpassword ||
      // signup1Data.dob == '' ||
      signup1Data.gender == '' ||
      !signup1Data.phone.length > 0
    ) {
      setErrorField(true);
    } else {
      dispatch(StepOneData(signup1Data))
      if (signup1Data.role === 'user') {
        navigation.push('Signup3');
      } else {
        navigation.push('Signup2');
      }
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          <Text style={styles.toolbarTxt}>Sign up</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          style={{marginTop: 5}}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.signupForm}>
            <Text style={styles.inputTitleStyle}>Full Name *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor:
                  !signup1Data.fullName.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                padding: 12,
                color: '#fff',
              }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.txtinp}
                value={signup1Data.fullName}
                onChangeText={text =>
                  setSignup1Data({
                    ...signup1Data,
                    fullName: text,
                  })
                }
                placeholder=" Enter your Fullname..."
              />
            </View>
            {errorField && !signup1Data.fullName.length > 0 && (
              <Text style={styles.errorTxt}>{FULLNAME_REQUIRED}</Text>
            )}

            <Text style={styles.inputTitleStyle}>Username *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor:
                  !signup1Data.username.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                padding: 12,
                color: '#fff',
              }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.txtinp}
                value={signup1Data.username}
                onChangeText={text =>
                  setSignup1Data({
                    ...signup1Data,
                    username: text,
                  })
                }
                placeholder=" Enter your Username"
              />
            </View>
            {errorField && !signup1Data.username.length > 0 && (
              <Text style={styles.errorTxt}>{USERNAME_REQUIRED}</Text>
            )}
            <Text style={styles.inputTitleStyle}>
              Please select your Role *
            </Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor:
                  !signup1Data.role.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                color: '#fff',
              }}>
              <ModalDropdown
                style={styles.modeldropdown}
                textStyle={styles.textStyle}
                dropdownStyle={{
                  marginTop: 18,
                  width: 310,
                  marginLeft: -20,
                  backgroundColor: '#f2f2f2',
                  height: 115,
                }}
                options={roleItems}
                onSelect={onSelectRole}
                renderRow={option => (
                  <View style={styles.dropdownStyle}>
                    <Text style={styles.optionTextStyle}>{option.label}</Text>
                  </View>
                )}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={
                      signup1Data.role === ''
                        ? styles.nationalityTxt
                        : styles.onselecttxt
                    }>
                    {signup1Data.role === ''
                      ? 'Please select your Role...'
                      : signup1Data.role}
                  </Text>
                  <View style={{marginRight: 12, justifyContent: 'center'}}>
                    <Image
                      source={require('../../../assets/images/downArrow.png')}
                      style={{
                        height: 12,
                        width: 12,
                        tintColor: '#fff',
                        resizeMode: 'contain',
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                </View>
              </ModalDropdown>
            </View>
            {errorField && !signup1Data.role.length > 0 && (
              <Text style={styles.errorTxt}>{ROLE_REQUIRED}</Text>
            )}
            <Text style={styles.inputTitleStyle}>Nationality *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor:
                  !signup1Data.nationality.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                color: '#fff',
              }}>
              <ModalDropdown
                style={styles.modeldropdown}
                textStyle={styles.textStyle}
                options={countryItems}
                dropdownStyle={{
                  marginTop: 18,
                  width: 310,
                  marginLeft: -20,
                  backgroundColor: '#f2f2f2',
                }}
                onSelect={Onselect}
                renderRow={option => (
                  <View style={styles.dropdownStyle}>
                    <Text style={styles.optionTextStyle}>{option.name}</Text>
                  </View>
                )}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={
                      signup1Data.nationality === ''
                        ? styles.nationalityTxt
                        : styles.onselecttxt
                    }>
                    {signup1Data.nationality === ''
                      ? 'Please select your nationality...'
                      : signup1Data.nationality}
                  </Text>
                  <View style={{marginRight: 12, justifyContent: 'center'}}>
                    <Image
                      source={require('../../../assets/images/downArrow.png')}
                      style={{
                        height: 12,
                        width: 12,
                        tintColor: '#fff',
                        resizeMode: 'contain',
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                </View>
              </ModalDropdown>
            </View>
            {errorField && !signup1Data.nationality.length > 0 && (
              <Text style={styles.errorTxt}>{NATIONALITY_REQUIRED}</Text>
            )}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.inputTitleStyle}>Email *</Text>
              <View style={{marginTop: 5}}>
                {errorField && !signup1Data.email.length > 0 ? (
                  <Text style={[styles.errorTxt, {marginLeft: 5}]}>
                    {EMAIL_REQUIRED}
                  </Text>
                ) : errorField &&
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(
                    signup1Data.email,
                  ) ? (
                  <Text style={[styles.errorTxt, {marginLeft: 5}]}>
                    {EMAIL_VALIDATION}
                  </Text>
                ) : null}
              </View>
            </View>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor:
                  !signup1Data.email.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                padding: 12,
                color: '#fff',
              }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.txtinp}
                value={signup1Data.email}
                onChangeText={text =>
                  setSignup1Data({
                    ...signup1Data,
                    email: text,
                  })
                }
                placeholder=" Enter your Email"
              />
            </View>
            <Text style={styles.inputTitleStyle}>Password *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor:
                  !signup1Data.password.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                padding: 12,
                color: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                placeholderTextColor="grey"
                value={signup1Data.password}
                onChangeText={text =>
                  setSignup1Data({
                    ...signup1Data,
                    password: text,
                  })
                }
                style={{
                  padding: 5,
                  fontSize: 15,
                  width: '90%',
                  color: '#fff',
                  height: 50,
                }}
                placeholder=" Password"
                secureTextEntry={show}
              />
              {!show ? (
                <TouchableOpacity
                  onPress={() => {
                    setShow(true);
                  }}
                  style={{
                    marginLeft: 12,
                    // position: 'absolute',
                    // marginTop: 22,
                    // marginLeft: '87%',
                  }}>
                  <Image
                    source={d}
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      tintColor: '#C2C9D1',
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setShow(false);
                  }}
                  style={{
                    marginLeft: 10,
                    // position: 'absolute',
                    // marginTop: 22,
                    // marginLeft: '87%',
                  }}>
                  <Image
                    source={visibleImage}
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      tintColor: '#C2C9D1',
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
            {errorField && !signup1Data.password.length > 0 ? (
              <Text style={styles.errorTxt}>{PASSWORD_REQUIRED}</Text>
            ) : errorField &&
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
                signup1Data.password,
              ) ? (
              <Text style={styles.errorTxt}>{PASSWORD_VALIDATION}</Text>
            ) : null}
            <Text style={styles.inputTitleStyle}>Confirm Password *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor:
                  signup1Data.password !== signup1Data.cnfpassword && errorField
                    ? 'red'
                    : '#C0C0C0',
                padding: 12,
                color: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                placeholderTextColor="grey"
                value={signup1Data.cnfpassword}
                onChangeText={text =>
                  setSignup1Data({
                    ...signup1Data,
                    cnfpassword: text,
                  })
                }
                style={[
                  styles.txtinp,
                  {padding: 5, fontSize: 15, color: '#fff', width: '90%'},
                ]}
                placeholder=" Confirm Password"
                secureTextEntry={show1}
              />
              {!show1 ? (
                <TouchableOpacity
                  onPress={() => {
                    setShow1(true);
                  }}
                  style={{
                    marginLeft: 10,
                  }}>
                  <Image
                    source={d}
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      tintColor: '#C2C9D1',
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setShow1(false);
                  }}
                  style={{
                    marginLeft: 10,
                  }}>
                  <Image
                    source={visibleImage}
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      tintColor: '#C2C9D1',
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
            {errorField && signup1Data.password !== signup1Data.cnfpassword && (
              <Text style={styles.errorTxt}>{CONFIRMPASSWORD_REQUIRED}</Text>
            )}
            {/* {errorField && !signup1Data.cnfpassword.length > 0 ? (
                  <Text
                    style={styles.errorTxt}>
                    {CONFIRMPASSWORD_REQUIRED}
                  </Text>
                ) : errorField && signup1Data.password !== signup1Data.cnfpassword  ? (
                  <Text
                    style={styles.errorTxt}>
                    {CONFIRMPASSWORD_REQUIRED}
                  </Text>
                ) : null} */}
            <Text style={styles.inputTitleStyle}>Date of Birth *</Text>

            <View>
              <DatePicker
                style={styles.datePickerStyle}
                date={signup1Data.dob}
                mode="date"
                placeholder="Select date..."
                format="YYYY-MM-DD"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    // display: 'none',
                    position: 'absolute',
                    // left: 5,
                    top: 4,
                    marginLeft: 0,
                    right: 10,
                  },
                  dateInput: {
                    borderRadius: 6,
                    height: 50,
                    borderColor:!signup1Data.dob.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                    alignItems:'flex-start',
                    paddingLeft:22,
                  },
                  placeholderText:{
                    color:'grey'
                  },
                  dateText: {
                    color:'white',
                    fontSize:15
                  }
                }}
                onDateChange={date => {
                  setSignup1Data({
                    ...signup1Data,
                    dob: date,
                  });
                }}
              />
            </View>
            {errorField && !signup1Data.dob.length > 0 && (
              <Text style={styles.errorTxt}>{DOB_REQUIRED}</Text>
            )}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.simpleTxt}>Gender *</Text>
              <View style={{marginTop: 5, justifyContent: 'center'}}>
                {errorField && !signup1Data.gender.length > 0 && (
                  <Text style={[styles.errorTxt, {marginLeft: 5}]}>
                    {GENDER_REQUIRED}
                  </Text>
                )}
              </View>
            </View>
            <View
              style={{flexDirection: 'row', marginBottom: 10, marginTop: 15}}>
              {radioButtonsData.map((radioItem, radioIndex) => (
                <TouchableOpacity
                  onPress={() => radioButtonCalled(radioItem)}
                  style={{
                    flexDirection: 'row',
                    marginLeft: radioIndex === 0 ? 10 : 20,
                  }}>
                  <Image
                    source={
                      radioItem.selected
                        ? require('../../../assets/images/selectedBtn.png')
                        : require('../../../assets/images/unselectedBtn.png')
                    }
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      tintColor: 'grey',
                    }}
                  />
                  <Text style={{marginLeft: 5, color: '#fff'}}>
                    {radioItem.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.inputTitleStyle}>PhoneNumber *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor:
                  !signup1Data.phone.length > 0 && errorField
                    ? 'red'
                    : '#C0C0C0',
                padding: 12,
                color: '#fff',
              }}>
              <TextInput
                placeholderTextColor="grey"
                style={styles.txtinp}
                value={signup1Data.phone}
                onChangeText={text =>
                  setSignup1Data({
                    ...signup1Data,
                    phone: text,
                  })
                }
                keyboardType="numeric"
                maxLength={10}
                placeholder=" Phone Number"
              />
            </View>
            {errorField && !signup1Data.phone.length > 0 && (
              <Text style={styles.errorTxt}>{PHONENUMBER_REQUIRED}</Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button label="Next >>>" onPress={goToStepTwo} />
    </SafeAreaView>
  );
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
    marginLeft: 125,
  },
  toolbarTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  signupForm: {
    padding: 15,
  },
  simpleTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 2,
    paddingTop: 3,
  },
  sexSelector: {
    flexDirection: 'row',
    // paddingLeft: 10,
    paddingLeft: 0,
    margin: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    alignItems: 'center',
  },
  textRights: {
    color: 'white',
  },
  container1: {
    height: 50,
    fontSize: 15,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    padding: 12,
    color: '#fff',
  },
  // dateinput: {
  //   height: 50,
  //   fontSize: 15,
  //   marginVertical: 6,
  //   borderRadius: 6,
  //   borderWidth: 1,
  //   borderColor: '#C0C0C0',
  //   padding: 12,
  //   width: Platform.OS === 'ios' ? 350 : 324,
  // },
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#fff',
    // marginLeft: 5,
  },
  txtDOB: {
    fontSize: 15,
    color: 'grey',
  },
  txtDOB1: {
    fontSize: 15,
    color: 'white',
    paddingLeft: 4,
  },
  datepickersty: {
    backgroundColor: 'white',
    // marginRight:270,
    width: 80,
    borderRadius: 10,
  },
  imgBtn: {
    height: 30,
    width: 30,
  },
  modeldropdownview: {
    height: 50,
    marginVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  modeldropdown: {
    paddingLeft: 13,
    // backgroundColor:'red',
  },
  textStyle: {
    fontSize: 15,
    color: 'grey',
  },
  dropdownStyle: {
    width: 310,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  optionTextStyle: {
    color: '#000',
  },
  nationalityTxt: {
    color: 'grey',
  },
  onselecttxt: {
    color: '#fff',
  },
  txtinp: {
    height: 50,
    color: '#fff',
  },
  errorTxt: {
    color: 'red',
    marginBottom: 10,
  },
  datePickerStyle: {
    width: 360,
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor:'white'
  },
});

export default SignUpScreen1;
