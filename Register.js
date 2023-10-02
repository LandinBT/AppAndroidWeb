import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*Variables*/
            modalVisibleEmail: false,
            modalVisibleFb: false,

            nombre: "",
            correo: "",
            password: "",
        };
    }

    render() {
        const email = () => {
            this.setState({ modalVisibleEmail: true })
        }
        const cierraModalEmail = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                }
            };
            xhttp.open("GET", "https://progwebqcei.000webhostapp.com/datos.php?nombre=" + this.state.nombre + "&correo=" + this.state.correo + "&password=" + this.state.password, true);
            console.log("https://progwebqcei.000webhostapp.com/datos.php?nombre=" + this.state.nombre + "&correo=" + this.state.correo + "&password=" + this.state.password);
            xhttp.send();

            this.setState({ modalVisibleEmail: false })
        }
        const cierraModalFb = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                }
            };
            xhttp.open("GET", "https://progwebqcei.000webhostapp.com/datos.php?correo=" + this.state.correo + "&password=" + this.state.password, true);
            xhttp.send();

            this.setState({ modalVisibleFb: false })
        }
        const fb = () => {
            this.setState({ modalVisibleFb: true })
        }
        return (
            <View style={{ backgroundColor: "white", height: 1000 }}>
                <Text style={styles.title}> Sign Up </Text>

                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: 'blue',
                    backgroundColor: 'blue',
                    width: 210,
                    height: 60,
                    borderRadius: 40,
                    marginLeft: 90,
                    marginTop: 30
                }} onPress={email}>
                    <Text style={{
                        color: 'white',
                        fontSize: 19,
                        marginTop: 15,
                        textAlign: 'center',
                    }}>Register with Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: 'gray',
                    backgroundColor: 'gray',
                    width: 210,
                    height: 60,
                    borderRadius: 40,
                    marginLeft: 90,
                    marginTop: 30,
                }} onPress={fb}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        marginTop: 15,
                        textAlign: 'center',
                    }}>Register with Facebook</Text>
                </TouchableOpacity>

                {/*Ventana Modal*/}
                <Modal
                    transparent={true}
                    visible={this.state.modalVisibleEmail}
                    animationType='slide'>
                    <View style={{
                        borderWidth: 2,
                        marginLeft: 50,
                        marginTop: 300,
                        width: 300,
                        height: 300,
                        borderColor: 'gray',
                        borderRadius: 40,
                        backgroundColor: 'black',
                    }}>
                        <Text style={{ marginLeft: 35, color: 'white' }}>Name:</Text>
                        <TextInput style={styles.txtInput}
                            onChangeText={(nombre) => this.setState({ nombre })}
                        ></TextInput>

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

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
    },
    txtInput: {
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        width: 200,
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        marginTop: 5,
        marginBottom: 8,
        marginLeft: 20,
    },
})