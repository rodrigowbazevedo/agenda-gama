import React, { Component } from 'react';
import ContatoStore from '../Store/ContatoStore';
import ImagePicker from 'react-native-image-picker';
import Styles from './NovoContato.css';
import Foto from './Foto';

import {
	View,
	ScrollView,
	Text,
	TextInput
} from 'react-native';

export default class NovoContato extends Component{

	constructor(props){
		super(props);

		this.state = {
			id: null,
			nome: '',
			email: '',
			telefone: '',
			foto: {
				uri: null
			}
		};

		this.props.setCallBack(() => {
			const { nome, telefone, email } = this.state;

			if(nome == ''){
				return Promise.reject('Compo de nome é obrigatório!');
			}

			if(email == ''){
				return Promise.reject('Compo de email é obrigatório!');
			}

			if(email == ''){
				return Promise.reject('Compo de telefone é obrigatório!');
			}

			return ContatoStore.salvar(this.state);
		});
	}

	render(){
		const { nome, telefone, email, foto } = this.state;

		return (
			<View style={Styles.container}>
				<ScrollView style={{ alignSelf: 'stretch' }}>
					<TextInput
						value={nome}
						onChangeText={nome => { this.setState({ nome }); }}
						placeholder='Nome do contato...'
						style={Styles.input}
					/>
					<TextInput
						value={telefone}
						onChangeText={telefone => { this.setState({ telefone }); }}
						placeholder='Telefone....'
						style={Styles.input}
					/>
					<TextInput
						value={email}
						onChangeText={email => { this.setState({ email }); }}
						placeholder='Email...'
						style={Styles.input}
					/>
					<Foto
						foto={foto}
						onSelected={foto => { this.setState({ foto }); }}
					/>
				</ScrollView>
			</View>
		);
	}
}