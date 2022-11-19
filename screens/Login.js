import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
// import things related to React Navigation
import { NavigationContainer, useLinkTo} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';
import { text } from 'body-parser';

const Login = props => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
   
   
    const handleSubmitPress = () => {
      setErrortext('');
      console.log("User: " + userEmail)
      console.log("Password: " +userPassword)
      if (!userEmail) {
        alert('Please fill Email');
        return;
      }
      if (!userPassword) {
        alert('Please fill Password');
        return;
      }
      setLoading(true);
      let dataToSend = {email: "Gui1h3rme", password: "ree95wrgqCNM4Su"};
      let formBody = [];
      console.log(dataToSend)
      for (let key in dataToSend) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(dataToSend[key]);
        // console.log(encodedKey + ": " + encodedValue)
        formBody.push(encodedKey + '=' + encodedValue);
      }
      // console.log("Form body: " +formBody)
      formBody = formBody.join('&');
      console.log("Beore fetch")
      
      fetch('http://localhost:3000/user', {
      method: 'POST',
      body: formBody,
      mode:'no-cors',
      headers: {
        //Header Defination
        credentials:false,
        'Sec-Fetch-Mode':'cors',
        'mode':'no-cors',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET, POST',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    //  .then((response) => response.json())
    // responseJson comes back empty  
      .then((responseJson) => {
        //Hide Loader
        console.log(responseJson)
        setLoading(true);
          console.log("responsejson.data: "+JSON.stringify(responseJson));
        // If server response message same as Data Matched
        if (responseJson.status == 'success') {
          AsyncStorage.setItem('email', responseJson.data.email);
          console.log("responsejson.data.email: "+responseJson.data.email);
          props.navigation.navigate('Screen2');
        } else {
          setErrortext(responseJson.msg);
          console.log("ERROR!!!"+JSON.stringify(responseJson));
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error("ERROR: "+error);
      });
      console.log("After")
  };

    return (
      <View style={styles.containerLogo}>    
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
  
        <View style={styles.container}>
        <StatusBar style="auto" />
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            // value="Gui1h3rme"
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            // value="ree95wrgqCNM4Su"
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          />
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
  
  
  
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={handleSubmitPress}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
 </TouchableOpacity>
  
        <View style={styles.row}>
          <Text>Don't have an account? </Text>    
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
              <Text style={{
              color:"#F7B8B4",
            }}>Register</Text>
            </TouchableOpacity>
       
        </View>
  
  
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    containerLogo: {
      flex: 1,
      backgroundColor: '#F8F8FF',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    logo: {
      resizeMode: "cover",
      top: 100,
      height: 126,
      width: 275,
      marginBottom: 240,
    },
    inputView: {
      backgroundColor: "#F8F8FF",
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "#FCEE9B",
      height: 45,
      width: 250,
      marginBottom: 20,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginScreenButton:{
    alignItems: 'center',
    height: 40,
    width:100,
      paddingTop:8,
      paddingBottom:10,
      backgroundColor:'#D3EAE8',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#D3EAE8'
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
    },
  });

  
export default Login;