import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'; 
import signupImage from './assets/signupImage.jpg';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

    return(

        <ImageBackground source={signupImage}  style = {styles.backGroundImage}>
        
        <View >
          <Text style={{fontSize:60, textAlign:'center', paddingTop:130}}>SIGN UP</Text>
          <View style={{paddingTop: 30}}>
            <TextInput placeholder='Name' style={styles.input} />
            <TextInput placeholder='Mail' style={styles.input} />
            <TextInput placeholder='Password' style={styles.input} />
            <TextInput placeholder='Confirm Password' style={styles.input} />
          </View>
          <TouchableOpacity>
            <Text style = {styles.button}>Sign Up</Text>
          </TouchableOpacity>
          {/* <Text style = {styles.login}>If you already have an account?
          <TouchableOpacity>
            <Text style = {styles.loginlink}>Login</Text>
          </TouchableOpacity>
          </Text> */}
        </View>

        </ImageBackground>
        
        
       
    );

}

const styles = StyleSheet.create({

  backGroundImage : {
    flex:1,
    
  },

  input : {
    textAlign: "left",
    fontSize : 35,
    padding : 10
  },

  button : {
    padding : 50,
    fontSize : 30,
    textAlign : 'center',
    color : 'blue'
  },

  // login : {
  //   paddingLeft : 10,
  //   fontSize : 15
  // },

  // loginlink : {
  //   fontSize : 15
  // }
})