import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Agenda from './Agenda';
import NovoContato from './NovoContato';

import {
  View,
  Text
} from 'react-native';

const buttonsStyle = {
  color: '#333333',
  fontSize: 14
};

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
            onRight={() => { Actions.novoContato() }}
            rightButtonTextStyle={buttonsStyle}
          />
          <Scene
            key="novoContato"
            title="Novo Contato"
            component={NovoContato}
            backTitle="VOLTAR"
            backButtonImage={null}
            backButtonTextStyle={buttonsStyle}
            rightTitle="SALVAR"
            onRight={() => {  }}
            rightButtonTextStyle={buttonsStyle}
          />
        </Scene>
      </Router>
    );
  }
}
