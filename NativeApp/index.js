/**
 * @format
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

class NativeApp extends Component{
    
    render(){
        
        return(
            <View style = {styles.background}>
                <Text style = {styles.tieude}>
                    Xin chào tất cả mọi người
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('NativeApp', () => NativeApp);

var styles = StyleSheet.create({
    tieude: {
        color: 'red', textAlign: 'center', fontSize: 30, fontFamily: 'Tahoma', textTransform: 'uppercase'
    },
    background: {
        backgroundColor: '#265A7A'
    }
})
