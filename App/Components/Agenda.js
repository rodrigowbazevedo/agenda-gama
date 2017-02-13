import React, { Component } from 'react';
import ContatoStore from '../Store/ContatoStore';
import Styles from './Agenda.css';
import { Actions } from 'react-native-router-flux';

import {
	View,
	Text,
	ListView
} from 'react-native';

export default class Agenda extends Component{

	constructor(props){
		super(props);


 		this.state = {
 			contatos : []
 		};
	}

	componentDidMount() {
		ContatoStore.getAll().then(contatos => {
			this.setState({ contatos });
		});
	}

	contatos() {
		const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		console.log(this.state.contatos);
		return dataSource.cloneWithRows(this.state.contatos);
	}

	list(){
		if(this.state.contatos.length === 0){
			return null;
		}

		return <ListView
			dataSource={this.contatos()}
			renderRow={contato => { return <Text>{ contato.nome }</Text>}}
		/>;
	}

	render(){
		return <View style={Styles.container}>
			{this.list()}
		</View>
	}
}

