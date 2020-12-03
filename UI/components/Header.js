import React from "react";
import { View, Text } from "react-native";
import { auth } from "../../database/firebase";

import Styles from "../screens/Styles";

const Header = (props) => {
  const authStatus = auth.currentUser;
  console.log("USER STATUS", authStatus);

  const loggedHeader = (props) => {
    return (
      <View>
        <Text style={Styles.header}>SaleList App</Text>
    <Text>{
           
        }</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={Styles.header}>SaleList App</Text>
    </View>
  );
};

export default Header;
