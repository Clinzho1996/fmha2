/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Departments from './Departments';
import About from './About';
import Profile from './Profile';

const Main = () => {
  const Tab = createBottomTabNavigator();

  return (
    <PaperProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            height: 70,
            paddingHorizontal: 5,
            paddingTop: 0,
            paddingBottom: 20,
            backgroundColor: '#1b1b1b',
            position: 'absolute',
            margin: 10,
            borderRadius: 6,
            borderTopColor: '#303030',
            borderWidth: 1,
            borderColor: '#303030',
            elevation: 1,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, tintColor}) => {
              return (
                <View style={styles.nav}>
                  <FontAwesome5
                    name="home"
                    size={focused ? 25 : 25}
                    color={focused ? '#fff' : '#99dd7a'}
                  />
                  <Text
                    style={{
                      color: focused ? '#fff' : '#99dd7a',
                      fontSize: focused ? 10 : 10,
                    }}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Departments"
          component={Departments}
          options={{
            tabBarIcon: ({focused, tintColor}) => {
              return (
                <View style={styles.nav}>
                  <FontAwesome5
                    name="building"
                    size={focused ? 25 : 25}
                    color={focused ? '#fff' : '#99dd7a'}
                  />
                  <Text
                    style={{
                      color: focused ? '#fff' : '#99dd7a',
                      fontSize: focused ? 10 : 10,
                    }}>
                    Departments
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({focused, tintColor}) => {
              return (
                <View style={styles.nav}>
                  <FontAwesome5
                    name="info-circle"
                    size={focused ? 25 : 25}
                    color={focused ? '#fff' : '#99dd7a'}
                  />
                  <Text
                    style={{
                      color: focused ? '#fff' : '#99dd7a',
                      fontSize: focused ? 10 : 10,
                    }}>
                    About
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, tintColor}) => {
              return (
                <View style={styles.nav}>
                  <FontAwesome5
                    name="user"
                    size={focused ? 25 : 25}
                    color={focused ? '#fff' : '#99dd7a'}
                  />
                  <Text
                    style={{
                      color: focused ? '#fff' : '#99dd7a',
                      fontSize: focused ? 10 : 10,
                    }}>
                    Profile
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
};

export default Main;

const styles = StyleSheet.create({
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    border: 0,
  },
});
