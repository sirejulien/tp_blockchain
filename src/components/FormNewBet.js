import React from 'react';
import * as BetCreation from '../services/BetCreation'

class FormNewBet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          arbitre: "",
          parieurA:"",
          parieurB:"",
          montant:0,
          sujet:""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
        BetCreation.createBet(this.state.arbitre,this.state.parieurA,this.state.parieurB,this.state.montant,this.state.sujet)
        alert('formulaire envoyé');
        event.preventDefault();
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>Arbitre :
            <input name="arbitre" type="text" value={this.state.arbitre} onChange={this.handleInputChange}/>
            </label><br/>
            <label>Parieur A :
            <input name="parieurA" type="text" value={this.state.parieurA} onChange={this.handleInputChange}/>
            </label><br/>
            <label>Parieur B :
            <input name="parieurB" type="text" value={this.state.parieurB} onChange={this.handleInputChange}/>
            </label><br/>
            <label>Montant :
            <input name="montant" type="number" value={this.state.montant} onChange={this.handleInputChange}/>
            </label><br/>
            <label>Sujet :
            <textarea name="sujet" cols="100" rows="10" value={this.state.sujet} onChange={this.handleInputChange}></textarea>
            </label><br/>
            <input type="submit" value="Create Bet"/>
        </form>
      );
    }
  }

  export default FormNewBet;