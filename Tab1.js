import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

// ruta: https://www.npmjs.com/package/react-native-side-drawer
// en TouchableOpacity style={styles.animatedBox}
/*<Tab.Navigator>
        <Tab.Screen name="Inicio" component={TAB1} />
        <Tab.Screen name="Tab2" component={TAB2} />
      </Tab.Navigator>*/
// esto va en el text en vez de Nombre {this.props.route.params.nombre}

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dataSource: [],
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <Text style={{ marginTop: 30 }}>
          Bienvenido:
          {/*<Text>Nombre</Text>*/}
        </Text>
        <TouchableOpacity onPress={this.toggleOpen} style={{ marginTop: 30, width: 50, height: 50 }}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    _this = this;

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var Temp = JSON.parse(xhttp.responseText);
        _this.setState({ dataSource: Temp });
      }
    };
    xhttp.open("GET", "https://dcc2.000webhostapp.com/2023B/datos.json", true);
    xhttp.send();
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}>
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./IMG/menuhamb.png')}
            ></Image>
          </TouchableOpacity>
        </MenuDrawer>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "blue", fontSize: 30 }}>Lista de Trabajadores</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>
              <View style={{ height: 300 }}>
                <Text style={{ color: "black", marginTop: 15 }}>{item.Nombre}</Text>
                <Text style={{ color: "black", marginTop: 15 }}>{item.Profesion}</Text>
                <Text style={{ color: "black", marginTop: 15 }}>{item.Telefono}</Text>
                <View>
                  <Image
                    style={{ width: 250, height: 70, marginTop:15 }}
                    source={{ uri: (item.Imagen) }}
                  />
                </View>
                <View style={{ width: 350, height: 3, backgroundColor: "gray", marginTop:5 }}></View>
              </View>
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    zIndex: 0,
  },
  animatedBox: {
    //flex: 1,
    backgroundColor: "#33CEFF",
    marginTop: 50,
    height: 700,
    width: 150,
  },
  body: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //backgroundColor: '#F04812'
    width: 30,
    height: 30,
    marginLeft: 300,
  },
});
