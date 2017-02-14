import React, { Component } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import ContatoStore from '../Store/ContatoStore';
import Styles from './Agenda.css';
import { Actions } from 'react-native-router-flux';
import Busca from './Busca';
import ContatoRow from './ContatoRow';

import {
	View,
	Text,
	ListView,
	TouchableHighlight,
	Alert
} from 'react-native';

export default class Agenda extends Component{

	constructor(props){
		super(props);


 		this.state = {
 			busca: '',
 			contatos : []
 		};

		this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}

	componentDidMount() {
		this.loadContatos();
	}

	loadContatos(){
		ContatoStore.getAll().then(contatos => {
			this.setState({ contatos });
		});
	}

	contatos() {
		const { busca, contatos } = this.state;

		const buscaLower = busca.toLowerCase();

		const filtered = contatos.filter(contato => {

			if(buscaLower == ''){
				return true;
			}

			return contato.nome.toLowerCase().indexOf(buscaLower) !== -1 ||
				contato.email.toLowerCase().indexOf(buscaLower) !== -1 ||
				contato.telefone.toLowerCase().indexOf(buscaLower) !== -1;
		});

		return this.dataSource.cloneWithRows(filtered);
	}

	renderContato(contato){
		return (
			<ContatoRow key={contato.id} contato={contato} />
		);
	}

	editarContato(contato){
	}

	excluirContato(contato){
		ContatoStore.excluir(contato.id)
			.then(() => {
				this.loadContatos();
			}).catch(error => {
				Alert.alert('Erro!', error);
			});
	}

	list(){
		const contatos = this.contatos();

		if(contatos.getRowCount() === 0){
			return <Text style={{ padding: 20 }}>Nenhum contato registrado.</Text>;
		}

		return <SwipeListView
			style={Styles.list}
			dataSource={contatos}
			renderRow={contato => this.renderContato(contato) }
			renderHiddenRow={ (contato, secId, rowId, rowMap) => (
                <View>
                	<TouchableHighlight
                		style={[Styles.buttons, Styles.excluir]}
                		onPress={() => {
                			this.excluirContato(contato);
                			rowMap[`${secId}${rowId}`].closeRow();
                		}}
                	>
                    	<Text style={Styles.label}>Excluir</Text>
                	</TouchableHighlight>
                	<TouchableHighlight
                		style={[Styles.buttons, Styles.editar]}
                		onPress={() => { this.editarContato(contato); }}
                	>
                    	<Text style={Styles.label}>Editar</Text>
                	</TouchableHighlight>
                </View>
            )}
            leftOpenValue={100}
            rightOpenValue={-100}
            previewFirstRow={true}
            previewOpenValue={-100}
		/>;
	}

	render(){
		const { busca } = this.state;

		return <View style={Styles.container}>
			<Busca
				busca={busca}
				onChange={busca => { this.setState({ busca }) }}
			/>
			{ this.list() }
		</View>
	}
}

