import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cccccc',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center'
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#acacac',
    marginRight: 10
  },
  name: {
    fontSize: 18
  }
});

export default styles;