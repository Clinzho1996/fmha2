/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
