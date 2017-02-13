import React, { Component } from 'react';
import ContatoStore from '../Store/ContatoStore';
import Styles from './Agenda.css';
import { Actions } from 'react-native-router-flux';
import ContatoRow from './ContatoRow';

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

		return dataSource.cloneWithRows(this.state.contatos);
	}

	renderContato(contato){
		return (
			<ContatoRow key={contato.id} contato={contato} />
		);
	}

	list(){
		if(this.state.contatos.length === 0){
			return <Text>Nenhum contato registrado.</Text>;
		}

		return <ListView
			style={Styles.list}
			renderRow={contato => this.renderContato(contato) }
			dataSource={this.contatos()}
		/>;
	}

	render(){
		return <View style={Styles.container}>
			{ this.list() }
		</View>
	}
}

