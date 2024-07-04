import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../../screens/WelcomeScreen/WelcomeScreen';
import Login from '../../screens/LoginScreen/LoginScreen';
import ForgetPassword from '../../screens/ForgotPassword/RecoveryEmail';
import OTPVerification from '../../screens/ForgotPassword/OTPVerification';
import ResetPassword from '../../screens/ForgotPassword/ResetPassword';
import Signup1 from '../../screens/SignupScreen/SignupScreen-1';
import Signup2 from '../../screens/SignupScreen/SignupScreen-2';
import Signup3 from '../../screens/SignupScreen/SignupScreen-3';
import HomeForCoach from '../../screens/HomeScreens/Coach/HomeForCoach';
import HomePlayer from '../../screens/HomeScreens/Player/HomeForPlayer';
import HomeForUser from '../../screens/HomeScreens/User/HomeForUser';
import LanguageScreen from '../../screens/LanguageSelect/LanguageSelectScreen';
import UserMenu from '../../screens/UserMenu/UserMenu';
import UserProfile from '../../screens/UserProfile/UserProfile';
import TrainingVideos from '../../screens/PracticeVideos/PracticeVideos';
import Activityfeature from '../../screens/Activity/Activityfeature';
import Shots from '../../screens/Keyfeature/Shots';
import Balls from '../../screens/Keyfeature/Balls';
import Table from '../../screens/Keyfeature/Table'
import Serve from '../../screens/Keyfeature/Serve'
import Swings from '../../screens/Keyfeature/Swings'
import State from '../../screens/Activity/State'
import Graph from '../../screens/Activity/Graph';
import PracticeVideos from '../../screens/TraningVideos/TraningVideos';
import UploadVideo from '../../screens/UploadVideo/UploadVideo';
import LiveStream from '../../screens/LiveStream/LiveStream';
import MatchStatistics from '../../screens/MatchStatistics/MatchStatistics';
import homeNavImg from '../../../assets/images/home-24.png';
import Profile from '../../../assets/images/user-24.png';
import TrainingScreen from '../../screens/BottomtabScreen/TraningScreen';
import ChatScreen from '../../screens/BottomtabScreen/ChatScreen';
import TeamScreen from '../../screens/BottomtabScreen/TeamScreen';
import Extra from '../../../assets/images/chat-24.png';
import MessageScreen from '../../screens/BottomtabScreen/MessageScreen';
import Team from '../../../assets/images/team-24.png';
import LiveStreamPlay from '../../screens/LiveStream/LiveStreamPlay';
import CreateNewTeam from '../../screens/CreateNewTeamScreen/CreateNewTeam';
import TeamActivities from '../../screens/CreateNewTeamScreen/TeamActivities';
import WhoCanPost from '../../screens/CreateNewTeamScreen/WhocanPost';
import WhoCanInvite from '../../screens/CreateNewTeamScreen/WhoCanInvite';
import TeamNotification from '../../screens/CreateNewTeamScreen/TeamNotification';
import InviteScreen from '../../screens/CreateNewTeamScreen/InviteScreen';
import UserPayment from '../../screens/SubscriptionScreens/UserPayment';
import UserScreen from '../../screens/HomeScreens/User/HomeForUser';
import ChangePasswordScreen from '../../screens/ForgotPassword/ChangePasswordScreen';
import SplashScreen from '../../screens/Splash/SplashScreen';
import UpdateProfileScreen from '../../screens/UpdateProfile/UpdateProfileScreen';
import Payment from '../../screens/SubscriptionScreens/Payment';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const CoachTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: styles.topTabBarStyle,
      tabBarLabelStyle: styles.tabLabelStyle,
      headerShown: false,
    }} >
      <Tab.Screen name="HomeForCoach" component={HomeForCoach}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'Coach',
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={homeNavImg} />
          ),
        })} />
      <Tab.Screen name="Message" component={MessageStack}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={Extra} />
          ),
        })} />
      <Tab.Screen name="TeamScreen" component={TeamScreen}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'Team',
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={Team} />
          ),
        })} />
      <Tab.Screen name="Account" component={UserMenu}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={Profile} style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} />
          ),
        })} />
    </Tab.Navigator>
  );
}
const PlayerTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: styles.topTabBarStyle,
      tabBarLabelStyle: styles.tabLabelStyle,
      headerShown: false
    }} >
      <Tab.Screen name="HomeForPlayer" component={HomePlayer}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'Player',
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={homeNavImg} />
          ),
        })} />
      <Tab.Screen name="Message" component={MessageStack}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={Extra} />
          ),
        })} />
      <Tab.Screen name="TeamScreen" component={TeamScreen}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'Team',
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={Team} />
          ),
        })} />
      <Tab.Screen name="Account" component={UserMenu}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={Profile} style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} />
          ),
        })} />
    </Tab.Navigator>
  );
}
const UserTabs = () => {

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: styles.topTabBarStyle,
      tabBarLabelStyle: styles.tabLabelStyle,
      headerShown: false
    }} >
      <Tab.Screen name="HomeForUser" component={UserScreen}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'User',
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={homeNavImg} />
          ),
        })} />
      <Tab.Screen name="Message" component={MessageStack}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarIcon: ({ focused, color, size }) => (
            <Image style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} source={Extra} />
          ),
        })} />
      <Tab.Screen name="Account" component={UserMenu}
        options={({ route }) => ({
          unmountOnBlur:true,
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={Profile} style={focused ? styles.BottomNavBarimg1 : styles.BottomNavBarimg} />
          ),
        })} />
    </Tab.Navigator>
  );
}

const MessageStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessageScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ header: () => null }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="Signup1" component={Signup1} />
        <Stack.Screen name="Signup2" component={Signup2} />
        <Stack.Screen name="Signup3" component={Signup3} />
        <Stack.Screen name="HomePlayer" component={HomePlayer} />
        <Stack.Screen name="HomeForCoach" component={HomeForCoach} />
        <Stack.Screen name="UserMenu" component={UserMenu} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="TrainingVideos" component={TrainingVideos} />
        <Stack.Screen name="PracticeVideos" component={PracticeVideos} />
        <Stack.Screen name="UploadVideo" component={UploadVideo} />
        <Stack.Screen name="LiveStream" component={LiveStream} />
        <Stack.Screen name="LiveStreamPlay" component={LiveStreamPlay} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="MatchStatistics" component={MatchStatistics} />
        <Stack.Screen name="CoachTabs" component={CoachTabs} />
        <Stack.Screen name="PlayerTabs" component={PlayerTabs} />
        <Stack.Screen name="UserTabs" component={UserTabs} />
        <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
        <Stack.Screen name="Activityfeature" component={Activityfeature} />
        <Stack.Screen name="Shots" component={Shots} />
        <Stack.Screen name="Balls" component={Balls} />
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="Serve" component={Serve} />
        <Stack.Screen name="Swings" component={Swings} />
        <Stack.Screen name="State" component={State} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="TeamScreen" component={TeamScreen} />
        <Stack.Screen name="CreateNewTeam" component={CreateNewTeam} />
        <Stack.Screen name="TeamActivities" component={TeamActivities} />
        <Stack.Screen name="WhoCanPost" component={WhoCanPost} />
        <Stack.Screen name="WhoCanInvite" component={WhoCanInvite} />
        <Stack.Screen name="TeamNotification" component={TeamNotification} />
        <Stack.Screen name="InviteScreen" component={InviteScreen} />
        <Stack.Screen name="UserPayment" component={UserPayment} />
        <Stack.Screen name="HomeForUser" component={HomeForUser} />     
        <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({

  topTabBarStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#000',
    height: 70,
  },
  tabIndicatorStyle: {
    backgroundColor: '#6EC9DB',
    height: '70%',
    borderRadius: 8,
    marginBottom: 8,
    marginLeft: 12,
    width: '45%',
  },
  tabLabelStyle: {
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 5
  },
  BottomNavBarimg: {
    resizeMode: 'contain',
    tintColor: 'white'
  },
  BottomNavBarimg1: {
    resizeMode: 'contain',
    tintColor: 'red'
  },
});
