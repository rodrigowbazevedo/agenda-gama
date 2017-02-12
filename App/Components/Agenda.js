import React, { Component } from 'react';
import Styles from './Agenda.css';
import { Actions } from 'react-native-router-flux';

import {
	View,
	Text
} from 'react-native';

export default class Agenda extends Component{
	render(){
		return <View style={Styles.container}>
			<Text>Agenda</Text>
			<Text onPress={Actions.novoContato}>This is PageOne!</Text>
		</View>
	}
}