import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import db, { auth } from "../../database/firebase";

import Styles from "./Styles";
import Suspense from '../components/Suspense'

const Register = (props) => {
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeText = (name, value) => {
    setAuthData({ ...authData, [name]: value });
  };

  const registerUser = async () => {
    // validation
    if (authData.name === "") {
      alert("Please provide your name");
    } else if (authData.email === "") {
      alert("Please provide your email");
    } else if (authData.password === "") {
      alert("Please input your password");
    } else {
      // registering the user through firebase with email && password
      const newUser = await auth
        .createUserWithEmailAndPassword(authData.email, authData.password)
        .catch((error) => {
          alert("Oops something happened, error: ", error);
        });
      console.log(newUser);
      alert(
        "You have been registered successfully, redirecting you to your homepage."
      );
      const userToDatabase = await db.collection('users').add({
        name: authData.name,
        email: authData.email,
        password: authData.password
      })
      alert('user Saved')
    }
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
        <Text>Please enter your name</Text>
        <TextInput
          style={Styles.input}
          onChangeText={(value) => handleChangeText("name", value)}
          placeholder="John"
        />

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
