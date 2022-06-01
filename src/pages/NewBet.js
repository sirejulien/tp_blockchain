import React from 'react';

//page d'accueil, affiche un message de bienveu
const NewBet = () =>{
  return (
    <div>
      <h2>New Bet</h2>
      <form id="myForm">
            <label for="arbitre">Arbitre :</label>
            <input id="arbitre" name="arbitre" value=""/> <br/>
            <label for="parieurA">Parieur A :</label>
            <input id="parieurA" name="parieurA" value=""/><br/>
            <label for="parieurB">Parieur B :</label>
            <input id="parieurB" name="parieurB" value=""/><br/>
            <label for="montant">Montant :</label>
            <input type="number" id="montant" name="montant" value=""/><br/>
            <label for="sujet">Sujet :</label>
            <textarea id="sujet" name="sujet" cols="100" rows="10"></textarea><br/>
            <input type="submit" value="Create Bet"/>
          </form>
    </div>
  );
}
export default NewBet;