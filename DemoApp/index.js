/**
 * @format
 */

import React, {Component} from 'react';
import {
    AppRegistry, 
    View,
    Text,
    StyleSheet
} from 'react-native';

class DemoApp extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.view1}>
                    <Text style = {styles.mauchu1}>Manchester</Text>
                </View>
                <View style = {styles.view2}>
                    <Text style = {styles.mauchu2}>united</Text>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('DemoApp', () => DemoApp);

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
        flexDirection: 'row'
    },
    view1: {
        backgroundColor: 'black',
        flex: 1
    },
    view2: {
        backgroundColor: 'red',
        flex: 1
    },
    mauchu1: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    mauchu2: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black'
    }
})