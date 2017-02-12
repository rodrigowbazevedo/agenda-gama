import React, { Component } from 'react';
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
			nome: '',
			email: '',
			telefone: '',
			foto: {
				uri: null
			}
		};
	}

	render(){
		const { nome, telefone, email, foto } = this.state;

		return <View style={Styles.container}>
			<ScrollView style={{ alignSelf: 'stretch' }}>
				<TextInput
					value={nome}
					onChangeText={nome => { this.setState({ nome }); }}
					placeholder="Nome:"
					style={Styles.input}
				/>
				<TextInput
					value={telefone}
					onChangeText={telefone => { this.setState({ telefone }); }}
					placeholder="Telefone:"
					style={Styles.input}
				/>
				<TextInput
					value={email}
					onChangeText={email => { this.setState({ email }); }}
					placeholder="Email:"
					style={Styles.input}
				/>
				<Foto
					foto={foto}
					onSelected={foto => { this.setState({ foto }); }}
				/>
			</ScrollView>
		</View>
	}
}