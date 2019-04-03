import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import firebase from 'firebase';
import LoginScreen from './screen/Login';
import styles from './constants/styles';

export default class App extends Component {
   state = { loggedIn: null };

  componentWillMount(){
      firebase.initializeApp({
        
          apiKey: "AIzaSyD10UXrh0deglLP27rnsDAhtJaN2cZO4vQ",
          authDomain: "login-app-b4005.firebaseapp.com",
          databaseURL: "https://login-app-b4005.firebaseio.com",
          projectId: "login-app-b4005",
          storageBucket: "login-app-b4005.appspot.com",
          messagingSenderId: "607309669015"
        
      });

      firebase.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({loggedIn:true})
          }else {
            this.setState({loggedIn:false})
          }
      })
  }

  renderContent() {
       switch(this.state.loggedIn){
         case true:
           return(
           <TouchableOpacity style={styles.btnContainer} onPress={() => firebase.auth().signOut()}>
            <Text style={styles.btnText}>Sign Out</Text> 
           </TouchableOpacity>
         )
         case false:
           return <LoginScreen /> 
         
        default:
           return <ActivityIndicator size='large' />
       }

       
  }
  render() {
    return (
      <View style={styles.containerHome}>
      <Text style={styles.login}>Login App</Text>
       {this.renderContent()}
      </View>
    );
  }
}


