import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class DetailsList extends Component {
  render() {
    const registro = this.props.route.params.registro;

    return (
      <View>
        <Text>Nombre: {registro.Nombre}</Text>
        <Text>Número de Teléfono: {registro.Telefono}</Text>
        <Image source={{ uri: registro.Imagen }} style={{ width: 250, height: 70 }} />
      </View>
    );
  }
}
