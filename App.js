import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   ImageBackground ,
   TextInput,
    Dimensions,
    TouchableOpacity
   } from 'react-native';
import bg from './assets/images/bg.jpg';
import logo from './assets/images/logo.png';

const {width : WIDTH}= Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={bg} style={styles.backgoundContainer} >
      <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.logoText}> Login </Text>
      </View>
        <View  style={styles.inputContainer}>  
          <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>  
          <TextInput
              style={styles.input}
              placeholder={'password'}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
          />
        </View>
        <TouchableOpacity style={styles.btnlogin}>
          <Text style={styles.loginText}> Login </Text>
          </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({


  backgoundContainer:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems : 'center'


  },
  logoContainer:{
    alignItems:'center'


  },
  logo :{
    width:120,
    height:120

  },
  logoText:{
    color:'white',
    fontSize:20,
    fontWeight:"500",
    marginTop:10,
    opacity :0.5     

  },
  input:{
    width: WIDTH -55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)'


  },
  inputContainer:{
    paddingTop:10

  },
  btnlogin:{
    width: WIDTH -55,
    height:45,
    borderRadius:25,
    backgroundColor:'#4e6996',
    justifyContent:'center',
    marginTop:19

  },
  loginText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:17,
    textAlign:'center'

  }


});
