import React, { useState, useEffect } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { State } from "react-native-gesture-handler";
import { auth } from "../../database/firebase";

const Wishlist = (props) => {
  const [state, setstate] = useState({
    name: "",
    link: "",
  });


  const logoutUser = () => {
    auth.signOut().then(() => {
        console.log('user signed out')
        alert("Logging out, taking you to login screen"),
        props.navigation.navigate('LoginScreen');
    });
  };

  const handleChangeText = (name, value) => {
    setstate({ ...state, [name]: value });
  };

  useEffect

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          onChangeText={(value) => handleChangeText("name", value)}
          placeholder="Good or product name"
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          onChangeText={(value) => handleChangeText("link", value)}
          placeholder="Link to the product"
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Save" onPress={() => console.log(state)} />
      </View>
      <View>
        <Button title="Logout" onPress={logoutUser} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default Wishlist;
