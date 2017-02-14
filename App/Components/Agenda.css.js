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
  editar: {
  	alignSelf: 'flex-start',
  	backgroundColor: 'green',
  	height: 70,
  	width: 100,
  	padding: 20
  },
  excluir: {
  	alignSelf: 'flex-end',
  	backgroundColor: 'red',
  	height: 70,
  	width: 100,
  	padding: 20
  },
  label: {
  	color: 'white',
  	fontSize: 18,
  	fontWeight: 'bold'
  }
});

export default styles;