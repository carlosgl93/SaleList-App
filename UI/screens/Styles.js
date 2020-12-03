import React from 'react'
import { StyleSheet } from 'react-native'


const Styles = StyleSheet.create({

    header: {
        height: 50,
        textAlign: 'left',
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1
    },

    footerContainer: {
        height: 25,
        borderTopWidth: 1,
        paddingBottom: 10,
    },

    footerContent: {
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'light',
    },

    title:{
        fontSize: 15,
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 25,
    },

    buttonMargin: {
        // add button styles later
    },

    smallerMargins: {
        marginBottom: 25,
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10
    },

    commonMargins: {
        marginBottom: 50,
        marginTop: 50,
        marginLeft: 0,
        marginRight: 0
    },
    
    loading: {
        textAlign: 'center',
        marginTop: '50%'
    },
    container: {
        flex: 1,
        padding: 35
    },

    viewTitle: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        marginLeft: 0,
        paddingLeft: 0,
        marginBottom: 25
    },

    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    input: {
        marginTop: 10,
        marginBottom: 10
    }
})

export default Styles