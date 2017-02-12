import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import uniqueId from 'react-native-unique-id';

const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});

export default class ContatoStore{

	static async salvar(contato){
		if(contato.id == null){
			try{
				contato.id = await uniqueId();
			} catch (error) {
				console.error(error);
			}
		}

		return storage.save({
		    key: 'contato',
		    id: contato.id,
		    rawData: contato,
		    expires: null
		});
	}

	static getAll(){
		return storage.getAllDataForKey('contato');
	}
}