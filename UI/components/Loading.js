import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import firebase from "firebase";
import { auth } from '../../database/firebase'

import Styles from "../screens/Styles";

const Loading = (props) => {

    // checking props
    console.log('PROPS', props) 
    // function to check if user is logged in
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          props.navigation.navigate('WishlistScreen') 
      } else {
          props.navigation.navigate('LoginScreen')
      }
    });
  };

  useEffect(() => {
    checkIfLoggedIn();
}, [])

  return (
    <View>
      <ActivityIndicator style={Styles.loading} size="large" />
      <Text>Loading, please wait</Text>
    </View>
  );
};

export default Loading;
