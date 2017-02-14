import React, { Component } from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Agenda from './Agenda';
import FormContato from './FormContato';

import {
  View,
  Text,
  Alert
} from 'react-native';

const buttonsStyle = {
  color: '#333333',
  fontSize: 14
};

let salvar = null;

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="home"
            component={Agenda}
            title="Agenda"
            initial={true}
            rightTitle="NOVO"
            onRight={() => { Actions.formContato() }}
            rightButtonTextStyle={buttonsStyle}
            type={ActionConst.RESET}
          />
          <Scene
            key="formContato"
            title="Novo Contato"
            component={FormContato}
            backTitle="VOLTAR"
            backButtonImage={null}
            backButtonTextStyle={buttonsStyle}
            rightTitle="SALVAR"
            onRight={() => {
              salvar().then(result => {
                Actions.home()
              }).catch(error => {
                Alert.alert('Erro!', error);
              });
            }}
            setCallBack={callback => { salvar = callback }}
            rightButtonTextStyle={buttonsStyle}
            passProps={true}
          />
        </Scene>
      </Router>
    );
  }
}
