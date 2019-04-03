import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  input: {
    padding:10,
    borderWidth:1,
    borderColor: '#ccc',
    width:'80%',
    marginBottom:10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  btnText: {
    color:'white',
    fontSize: 20,    
    textAlign: 'center',
    padding: 10
  },
  btnContainer: {      
    backgroundColor: '#11404f',
    borderRadius: 10,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color:'red'
  },
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6'
  },
  login: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  });

  export default styles