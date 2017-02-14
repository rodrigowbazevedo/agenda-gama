import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import uniqueId from 'react-native-uuid';

const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});

export default class ContatoStore{

	static salvar(contato){
		if(contato.id == null){
			contato.id = uniqueId.v1();
		}

		return storage.save({
		    key: 'contato',
		    id: contato.id,
		    rawData: contato,
		    expires: null
		});
	}

	static getAll(){
		return storage.getAllDataForKey('contato')
			.then(contatos => contatos.sort((a, b) => {
				return a.nome.localeCompare(b.nome);
			}));
	}
}