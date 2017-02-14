import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 55
  },
  list: {
    alignSelf: 'stretch'
  },
  buttons: {
  	alignItems: 'center',
	bottom: 0,
	justifyContent: 'center',
	position: 'absolute',
	top: 0,
  	height: 70,
  	width: 100,
  },
  editar: {
  	backgroundColor: 'green',
  	right: 0
  },
  excluir: {
  	backgroundColor: 'red',
  },
  label: {
  	color: 'white',
  	fontSize: 18,
  	fontWeight: 'bold'
  }
});

export default styles;