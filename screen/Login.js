import React, {Component} from 'react';
import firebase from 'firebase';
import {TextInput, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from '../constants/styles';


export default class LoginScreen extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onSubmit = () => {
     const { email, password} = this.state;
     this.setState({error: '', loading:true})
     firebase.auth().signInWithEmailAndPassword(email, password)
       .then(this.onLoginSuccess)
       .catch(() => {
           firebase.auth().createUserWithEmailAndPassword(email, password)
             .then(this.onLoginSuccess)
             .catch(() => {
                this.setState({error: 'Authentication failed', loading: false})
             })
       })
  }

  onLoginSuccess = () => {
      this.setState({
          email: '',
          password: '',
          loading: false,
          error: ''
      })
  }

  renderButton = () => {
      if(this.state.loading){
       return <ActivityIndicator style={styles.spinnerStyle} size="small"/>
      } 

      return (
        <TouchableOpacity onPress={this.onSubmit} style={styles.btnContainer}>
        <Text style={styles.btnText}>Enter</Text>          
      </TouchableOpacity>
      )
      
  }



  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Email'
          style={styles.input}
          value={this.state.email}
          onChangeText={text => this.setState({email: text})}
           />
        <TextInput
          placeholder='Password'
          secureTextEntry
          style={styles.input}
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
            />

        <Text style={styles.errorTextStyle}>
            {this.state.error}
        </Text>
        <View>
        {this.renderButton()}
        </View>
        
      </View>
    );
  }
}


