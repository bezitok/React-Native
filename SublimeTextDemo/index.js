/**
 * @format
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text, 
	View
} from 'react-native'; 

class SublimeTextDemo extends Component {
	render(){
		return(
			<View style = {styles.maunen}>
				<Text style = {styles.mauchu}>Sau đây tôi xin test Github</Text>
				<Text style = {styles.mauchu}>Còn nhiều điều thú vị lắm nè</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('SublimeTextDemo', () => SublimeTextDemo)

var styles = StyleSheet.create({
	maunen: {
		backgroundColor: 'black'
	},
	mauchu: {
		color: 'red',
		fontFamily: 'segoe ui light'
	}
})
