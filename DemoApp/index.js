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
            <View style = {styles.maunen}>
                <Text style = {styles.mauchu}>Nếu đang yêu nhau chỉ cần, nhìn mưa sẽ nhớ nhau hơn. Thế nhưng sao lại sợ, giọt mưa thấm đẫm cô đơn</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('DemoApp', () => DemoApp);

var styles = StyleSheet.create({
    mauchu: {
        color: 'blue', textAlign: 'center', fontSize: 30
    },
    maunen: {
        backgroundColor: '#E34F1B',
        flex: 1
    }
})