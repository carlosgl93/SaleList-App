import React, { useState, useEffect } from "react";
import { View, Button, Text, ScrollView, StyleSheet } from "react-native";
import { State } from "react-native-gesture-handler";
import { ListItem, Avatar } from 'react-native-elements'

import db, { auth } from "../../database/firebase";
import Styles from '../screens/Styles'

const Wishlist = (props) => {
  const [wishes, setWishes] = useState({
    productName: "",
    link: "",
  });

  const logoutUser = () => {
    auth.signOut().then(() => {
      console.log("user signed out");
      alert("Logging out, taking you to login screen"),
        props.navigation.navigate("LoginScreen");
    });
  };

  useEffect(() => {

    // Chunk to retrieve userWishes
    const currentUser = auth.currentUser;
    const usersRef = db.collection("users");
    const userEmail = currentUser.email;
    

    // query to match current user with firestore

    const snapshot = usersRef
      .where("email", "==", userEmail) 
      .onSnapshot((querySnapshot) => {
        const wishes = []; // array to store each wish
        querySnapshot.docs.forEach((doc) => {
          const { userWishes } = doc.data();
          wishes.push({
            id: doc.id,
            userWishes,
          });
        });
        setWishes(wishes);
        
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
        {
          wishes.length ? 
            wishes.map(wish => {
              return (
                <ListItem
                  key={wish.id}
                >
                  <ListItem.Chevron/>
                  <ListItem.Content>
                    <ListItem.Title>
                      {wish.userWishes.productName}
                    </ListItem.Title>
                    
                  </ListItem.Content>
                </ListItem>
                
              )
            })
            :
            <Text>Loading your wishes!</Text>

        }

      <View style={styles.inputGroup}>
        <Button 
        title="New Wish" 
        onPress={() => props.navigation.navigate('CreateNewWishScreen')} />
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
