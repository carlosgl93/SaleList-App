import React from 'react'
import {View, Text} from 'react-native'
import Styles from '../screens/Styles'

const Footer = () => {
    return (
        <View style={Styles.footerContainer}>
            <Text style={Styles.footerContent}>
                SaleList is an app made by AppsAtHome, 2020
            </Text>
        </View>
    )
}

export default Footer
