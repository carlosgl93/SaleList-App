import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Header from './UI/components/Header'
import Loading from './UI/components/Loading'
import User from './UI/screens/User'
import Wishlist from './UI/screens/Wishlist'
import Login from './UI/screens/Login'
import Register from './UI/screens/Register'
import Tracker from './UI/screens/Tracker'
import Footer from './UI/components/Footer'
import NewWish from './UI/components/NewWish'

export default function App() {
  return (
    <>
    <Header/>
    <AppNavigator/>
    <Footer/>
    </>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: Loading,
  RegisterScreen: Register,
  WishlistScreen: Wishlist,
  LoginScreen: Login,
  UserScreen: User,
  TrackerScreen: Tracker,
  CreateNewWishScreen: NewWish
});

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
