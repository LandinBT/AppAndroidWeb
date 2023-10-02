import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class List extends Component {
    constructor(props) {
        super(props);

        var text = JSON.parse(jobs);
        this.state = {
            Vehicle_Details: text.map(function (item) {
                return item['Vehicle_Details']
            })
        }
    }
}

render() {
    return (
        <View>
            <Text> List </Text>
        </View>
    );
}
}
