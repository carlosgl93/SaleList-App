import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import db, { auth } from "../../database/firebase";

import Styles from "./Styles";

const Register = (props) => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const handleChangeText = (name, value) => {
    setAuthData({ ...authData, [name]: value });
  };

  const registerUser = (email, password) => {
    // registering the user through firebase with email && password
    const newUser = auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .catch((error) => {
        alert("Oops something happened, error: ", error);
      });
    console.log(newUser);
    alert(
      "You have been registered successfully, redirecting you to your homepage."
    );
  };

  const goToLogin = () => {
    props.navigation.navigate("LoginScreen");
  };

  const googleRegister = () => {
    console.log("Register with google, to do.");
  };

  const fbRegister = () => {
    console.log("Register with facebook, to do.");
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.viewTitle}>Create your account</Text>
      <View style={Styles.inputGroup}>
        <Text>Please enter your email</Text>
        <TextInput
          style={Styles.input}
          onChangeText={(value) => handleChangeText("email", value)}
          placeholder="Email"
        />

        <Text>Please enter your password</Text>

        <TextInput
          style={Styles.input}
          onChangeText={(value) => handleChangeText("password", value)}
          placeholder="Password"
          type="password"
        />

        {/* button to register user on click */}
        <Button style={Styles.input} title="Register" onPress={registerUser} />
      </View>

      <View>
        <Button
          style={Styles.input}
          title="Register with Google"
          onPress={googleRegister}
        />
      </View>

      <View>
        <Button
          style={Styles.input}
          title="Register with Facebook"
          onPress={fbRegister}
        />
      </View>

      <View>
        <Button title="Already have an account?" onPress={goToLogin} />
      </View>
    </View>
  );
};

export default Register;
