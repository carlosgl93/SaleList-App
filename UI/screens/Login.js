import React, { useState } from 'react'
import {View, Text, Button, ScrollView, TextInput} from 'react-native'

import { auth, gprovider } from '../../database/firebase'
import Styles from './Styles'

const Login = (props) => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password:'' 
    })

    
    
    const handleChangeText = (name, value) => {
        setUserInfo({...userInfo, [name]: value})
    }

    // Loggin with credentials

    const loginUser = () => {
        console.log('USER INFO AFTER TRIGGERING LOGIN FUNCTION', userInfo)
        auth.signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(
            alert('logged in successfully, redirecting to the homescreen'),
            props.navigation.navigate(
                'WishlistScreen'
            )
        ).catch((error) => {
            alert('something went wrong, error:', error)
            props.navigation.navigate(
                'LoginScreen'
            )
        }) 
    }

    // Login with Google provider -> to do

    const googleLogin = () => {
        console.log('must implement google login')
    }

    // login with facebook provider -> to do

    const fbLogin = () => {
        console.log('must implemetn fb login')
    }


    const goToRegister = () => {
        props.navigation.navigate('RegisterScreen')
    }

        return (
            <ScrollView style={Styles.container}>
                
                <Text style={Styles.title}>
                    Login to access your account
                </Text>

                {/* Login with credentials section */}

                <View style={Styles.inputGroup}>
                    <Text>
                        Enter your email
                    </Text>
                    <TextInput 
                    onChangeText={(value) => handleChangeText('email', value)}
                    placeholder='Email'/>
                </View>
                <View style={Styles.inputGroup}>
                    <Text>
                        Enter your password
                    </Text>
                    <TextInput 
                    onChangeText={(value) => handleChangeText('password', value)}
                    placeholder='Password'/>
                </View>
                <View style={Styles.inputGroup}>
                    <Button 
                    title='Log In'
                    onPress={loginUser}
                    />
                </View>

                {/* No account yet? Then register */}

                
                <View style={Styles.smallerMargins}>
            
                    <Button
                    title="Don't have an account"
                    onPress={goToRegister}
                    >
                        
                    </Button>
                </View>

                {/* No credentials options */}

                
                <View style={Styles.commonMargins}>
                    <Button
                    style={Styles.smallerMargins}
                    title='Sign In With Google'
                    onPress={googleLogin}
                    />
                    <Button
                    style={Styles.smallerMargins}
                    title='Sign In With Facebook'
                    onPress={fbLogin}
                    />
                </View>
            </ScrollView>
        )
    }

export default Login
