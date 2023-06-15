/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Login = ({navigation}) => {
  const [hidden, setHidden] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const changeStatusBarVisibility = () => setHidden(!hidden);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  const handleLogin = async () => {
    if (password === 'fmhadmsd2023') {
      setIsLoading(true);
      // Request location permission
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.SCHEDULE_EXACT_ALARM,
          {
            title: 'Location Permission',
            message:
              'This app requires location permission to function properly.',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Location permission granted, perform further actions if needed

          await AsyncStorage.setItem('AccessToken', 'signedIn');
          navigation.navigate('Loading'); // Navigate to the next screen after successful login
        } else {
          // Location permission denied
          setErrorMsg('Location permission denied.');
        }
      } catch (error) {
        console.log('Location permission request error:', error);
      }

      setIsLoading(false);
    } else {
      setErrorMsg('Invalid password');
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <View
      style={{
        backgroundColor: '#121212',
        alignItems: 'center',
        height: height,
        paddingTop: 50,
      }}>
      <StatusBar
        backgroundColor="#121212"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Image
          source={require('../resources/user.png')}
          style={{width: 80, height: 80, borderRadius: 10}}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            color: '#99dd7a',
            marginLeft: 10,
            paddingTop: 10,
          }}>
          FMHADMSD Event Calendar
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20, paddingBottom: 30}}>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 16,
              lineHeight: 24,
              color: '#828282',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Welcome back, we are glad you came back.{'\n'} Login with your
            unique password 🙃
          </Text>
        </View>
        <View style={styles.input}>
          <Icon
            name="lock-closed-outline"
            color="#808080"
            size={20}
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 6,
              borderColor: '#808080',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="#808080"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={{
                fontSize: 16,
                color: '#808080',
                paddingLeft: 20,
                width: 240,
              }}
            />
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                marginTop: 10,
              }}
              onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={'#C4C4C4'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{color: 'red', paddingHorizontal: 20}}>{errorMsg}</Text>
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity
            style={isLoading ? styles.buttonLoading : styles.btn}
            onPress={handleLogin}
            disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.btnText}>
                {isLoading ? 'Loading' : 'Login'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#232323',
    margin: 20,
    borderRadius: 10,
    padding: 6,
    borderWidth: 1,
    borderColor: '#303030',
    width: width - 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: '#99dd7a',
    marginTop: 20,
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
