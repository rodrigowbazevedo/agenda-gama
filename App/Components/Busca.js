import React, { Component } from 'react';
import Styles from './Busca.css';

import {
	View,
	TextInput
} from 'react-native';

export default class Busca extends Component{

	render(){
		const { busca, onChange } = this.props;

		return (
			<View style={Styles.container}>
				<TextInput
					placeholder="Buscar contato..."
					value={ busca }
					onChangeText={busca => {
						onChange(busca);
					}}
					style={Styles.input}
				/>
			</View>
		);
	}
}

