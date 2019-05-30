/**
 * @format
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text
} from 'react-native';

class NativeApp extends Component{
    render(){
        return(
            <View>
                <Text style={{marginTop:20}}>Xin chào mọi người</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('NativeApp', () => NativeApp);
