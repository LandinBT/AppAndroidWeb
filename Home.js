// © 2023 DanyBT®

// Importación de lo que usemos
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';

import { NavigationContext } from '@react-navigation/native'

export default class Home extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      // Declaración de variables
      modalVisibleEmail: false,
      modalVisibleFb: false,
    };
  }

  render() {
    // Programación de los objetos (botones, inputText, etc...)
    //const navigation = this.contextType;
    const navigation = this.props.navigation;

    const ir_a_insc = () => {
      this.props.navigation.navigate("Register");
    }

    const click1 = () => {
      console.log("Click al boton de email");
      this.setState({ modalVisibleEmail: true });
    }
    const click2 = () => {
      console.log("Click al boton de facebook");
      this.setState({ modalVisibleFb: true });
    }

    const cierraModalFb = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);

          if (xhttp.responseText == "3") {
            Alert.alert("Correo no reconocido, Registrate");
          }
          else {
            if (xhttp.responseText == "0") {
              Alert.alert("Passwor erroneo, intenta de nuevo");
            }
            else {
              navigation.navigate("Menu", { nombre: xhttp.responseText });
            }
          }
        }
      };
      xhttp.open("GET", "https://progwebqcei.000webhostapp.com/verifica.php?correo=" + this.state.correo + "&password=" + this.state.password, true);
      console.log("https://progwebqcei.000webhostapp.com/verifica.php?correo=" + this.state.correo + "&password=" + this.state.password);
      xhttp.send();

      this.setState({ modalVisibleFb: false })
    }

    const cierraModalEmail = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);

          if (xhttp.responseText == "3") {
            Alert.alert("Correo no reconocido, Registrate");
          }
          else {
            if (xhttp.responseText == "0") {
              Alert.alert("Passwor erroneo, intenta de nuevo");
            }
            else {
              navigation.navigate("Menu", { nombre: xhttp.responseText });
            }
          }
        }
      };
      xhttp.open("GET", "https://progwebqcei.000webhostapp.com/verifica.php?correo=" + this.state.correo + "&password=" + this.state.password, true);
      console.log("https://progwebqcei.000webhostapp.com/verifica.php?correo=" + this.state.correo + "&password=" + this.state.password);
      xhttp.send();

      this.setState({ modalVisibleEmail: false })
    }

    return (
      // Parte visual
      <View style={styles.fondo}>
        <Image
          style={styles.img1}
          source={{
            uri: 'https://static.wikia.nocookie.net/doblaje/images/0/04/Bob.jpg/revision/latest?cb=20181029201908&path-prefix=es',
          }}
        />

        <View style={styles.login}>
          <Text style={styles.textHandy}>Welcome to Handyman</Text>

          <TouchableOpacity style={styles.btnEml} onPress={click1}>
            <View style={styles.btnemail}>
              <Text style={styles.textEmail}>Sign in with Email</Text>
              <Image style={styles.iconEmail}
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png',
                }}
              />
            </View></TouchableOpacity>

          <TouchableOpacity style={styles.btnFb} onPress={click2}>
            <View style={styles.btnfacebook}>
              <Text style={styles.textFacebook}>Sign in with Facebook</Text>
              <Image style={styles.iconFb}
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png',
                }}
              />
            </View></TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister} onPress={ir_a_insc}>
            <View style={styles.signUp}>
              <Text style={styles.accTxt}>Don't have an account?</Text>
              <Text style={styles.signUpTxt}>Sign Up</Text>
            </View></TouchableOpacity>

        </View>

        <Modal
          transparent={true}
          visible={this.state.modalVisibleEmail}
          animationType='slide'>
          <View style={{
            borderWidth: 2,
            marginLeft: 50,
            marginTop: 300,
            width: 300,
            height: 240,
            borderColor: 'gray',
            borderRadius: 40,
            backgroundColor: 'black',
          }}>

            <Text style={{ marginLeft: 35, color: 'white' }}>Email:</Text>
            <TextInput style={styles.txtInput}
              onChangeText={(correo) => this.setState({ correo })}
            ></TextInput>

            <Text style={{ marginLeft: 35, color: 'white' }}>Password:</Text>
            <TextInput style={styles.txtInput}
              onChangeText={(password) => this.setState({ password })}
            ></TextInput>

            <TouchableOpacity style={{
              borderWidth: 2,
              borderColor: 'blue',
              backgroundColor: 'blue',
              width: 250,
              height: 50,
              borderRadius: 40,
              marginLeft: 20,
              marginTop: 10,
            }} onPress={cierraModalEmail}>
              <Text style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 8,
              }}>Accept</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          transparent={true}
          visible={this.state.modalVisibleFb}
          animationType='slide'>
          <View style={{
            borderWidth: 2,
            marginLeft: 50,
            marginTop: 300,
            width: 300,
            height: 240,
            borderColor: 'gray',
            borderRadius: 40,
            backgroundColor: 'black',
          }}>
            <Text style={{ marginLeft: 35, color: 'white' }}>Email:</Text>
            <TextInput style={styles.txtInput}
              onChangeText={(correo) => this.setState({ correo })}></TextInput>
            <Text style={{ marginLeft: 35, color: 'white' }}>Password:</Text>
            <TextInput style={styles.txtInput}
              onChangeText={(password) => this.setState({ password })}></TextInput>
            <TouchableOpacity style={{
              borderWidth: 2,
              borderColor: 'blue',
              backgroundColor: 'blue',
              width: 250,
              height: 50,
              borderRadius: 40,
              marginLeft: 20,
              marginTop: 10,
            }} onPress={cierraModalFb}>
              <Text style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 8,
              }}>Accept</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}

// Creación de estilos
const styles = StyleSheet.create({
  btnEml: {
    width: 250,
    height: 50,
    marginLeft: 65,
    marginTop: 10,
  },
  btnFb: {
    width: 250,
    height: 50,
    marginLeft: 65,
    marginTop: 13,
  },
  btnfacebook: {
    width: 250,
    height: 50,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 60,
  },
  btnemail: {
    width: 250,
    height: 50,
    borderWidth: 2,
    backgroundColor: '#063970',
    borderColor: '#063970',
    borderRadius: 60,
  },
  accTxt: {
    color: 'white',
    fontSize: 15,
    marginLeft: 75,
    marginTop: 20,
  },
  signUpTxt: {
    color: 'white',
    fontSize: 20,
    marginLeft: 240,
    marginTop: -25,
    fontWeight: 'bold',
  },
  textHandy: {
    color: 'white',
    fontSize: 30,
    marginLeft: 35,
    marginTop: 15,
    fontWeight: 'bold',
  },
  textEmail: {
    color: 'white',
    fontSize: 18,
    marginLeft: 70,
    marginTop: 10,
  },
  textFacebook: {
    color: 'black',
    fontSize: 17,
    marginLeft: 65,
    marginTop: 13,
  },
  fondo: {
    width: 500,
    height: 800,
    backgroundColor: 'white',
  },
  iconEmail: {
    width: 35,
    height: 30,
    marginTop: -26,
    marginLeft: 25,
  },
  iconFb: {
    width: 30,
    height: 30,
    marginTop: -23,
    marginLeft: 25,
  },
  img1: {
    width: 400,
    height: 500,
  },
  login: {
    width: 380,
    height: 250,
    borderWidth: 2,
    marginLeft: 5,
    backgroundColor: '#e27743',
    borderColor: '#e27743',
    borderRadius: 30,
  },
  txtInput: {
    color: 'black',
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 20,
    borderColor: 'gray',
    marginTop: 5,
    marginBottom: 8,
    marginLeft: 20,
    backgroundColor: 'white',
  },
})