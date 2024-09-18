import React, { Component } from 'react';
import './App.css';

import { PrimerComponente } from './PrimerComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

class App extends Component {
  render() {


    /**DEclaracion de objeto */
    const ficha_medica = {
      altura: "190cm",
      grupoSangre: "O+",
      estadoSalud: "Existeee",
      alergias: "yo :c titee"
    };


    return (
      <div className="App">
        <div className="App-header">
          <PrimerComponente />
          <hr />
        </div>

        <SegundoComponente />
        <hr />

        <TercerComponente
          nombre="Fabricio"
          apellido="Benegas"
          ficha= {ficha_medica} />
      </div>
    );
  }
}

export default App;
