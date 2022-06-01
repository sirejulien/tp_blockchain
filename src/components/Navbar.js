import React from 'react';
import {  Link } from "react-router-dom";

//NavBar, elle se sert du Link de react-router-dom pour faire le lien entre une adresse et une page js
const Navbar= () =>{
  return (
  <div>
        <Link to="/">Home</Link>
        <Link to="/NewBet">New Bet</Link>
        <Link to="/BetList">Bet List</Link>
  </div>
  );
}

export default Navbar;