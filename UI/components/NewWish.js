import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button } from "react-native";

import Styles from '../screens/Styles'
import db, { auth } from '../../database/firebase'

const NewWish = () => {

    const [ wish, setWish ] = useState({
        productName: '',
        link: ''
    })

    const user = auth.currentUser
    const userEmail = user.email
    const query = db.collection('users').where('email', '==', userEmail)
    query.get().then( (querySnapshot) => {
        querySnapshot.forEach(doc => {
            const userId = doc.id
            const userData = doc.data()
            const userWishes = userData.userWishes
            console.log('This user id: ', userId)
            console.log('user data: ', userData)
            console.log('user wishes', userWishes)
        }) 
    })

    const handleChangeText = (name, value) => {
        setWish({ ...wish, [name]: value });
      };

    const newWish = async (userId) => {
        const query = db.collection('users')
        await db.collection('users').doc(userId).update({
            'userWishes': {
                productName: wish.productName,
                link: wish.link
            }
        })
    }


  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.inputGroup}>
        <TextInput
          onChangeText={(value) => handleChangeText("name", value)}
          placeholder="Good or product name"
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput
          onChangeText={(value) => handleChangeText("link", value)}
          placeholder="Link to the product"
        />
      </View>
      <View style={Styles.inputGroup}>
        <Button title="Save" onPress={newWish} />
      </View>
    </ScrollView>
  );
};

export default NewWish;
