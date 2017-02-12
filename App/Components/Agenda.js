import React, { Component } from 'react';
import ContatoStore from '../Store/ContatoStore';
import Styles from './Agenda.css';
import { Actions } from 'react-native-router-flux';

import {
	View,
	Text
} from 'react-native';

export default class Agenda extends Component{

	componentDidMount() {
		ContatoStore.getAll().then(contatos => {
			console.log(contatos);
		});
	}

	render(){
		return <View style={Styles.container}>
			<Text>Agenda</Text>
			<Text onPress={Actions.novoContato}>This is PageOne!</Text>
		</View>
	}
}