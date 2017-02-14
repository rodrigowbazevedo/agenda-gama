import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';

import {
	View,
	Button,
	Image
} from 'react-native';

export default class NovoContato extends Component{

	constructor(props){
		super(props);

		this.selectImage = this.selectImage.bind(this);
	}

	selectImage(){
		ImagePicker.showImagePicker({
		  title: 'Selecione a foto',
		  mediaType: 'photo',
		  storageOptions: {
		    skipBackup: true,
		    path: 'images'
		  }
		}, response => {
		  if (response.didCancel) {
		    console.log('User cancelled image picker');
		  } else if (response.error) {
		    console.log('ImagePicker Error: ', response.error);
		  } else {
		    let source = { uri: response.uri };

		    // You can also display the image using data:
		    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

		    this.props.onSelected(source);
		  }
		});
	}

	foto(){
		const { foto } = this.props;

		if(foto.uri === null){
			return null
		}

		return <Image
			source={foto}
			resizeMode="cover"
			style={{
				width: 250,
				height: 250,
				marginBottom: 10
			}}
		/>
	}

	render(){
		const { foto } = this.props;

		return <View>
			{this.foto()}
			<Button
				title="Enviar Foto"
				onPress={this.selectImage}
				style={{
					width: 230
				}}
			/>
		</View>
	}
}