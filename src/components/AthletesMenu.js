// src/components/AthletesMenu.js

import React from 'react';
import { Link } from 'react-router';
import athletes frm '../data/athletes';

exports default class AthletesMenu extends React.Component {
  render(){
    return(
      <nav className="atheletes-menu">
      {athletes.map(menuAthlete =>{
        return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
           {menuAthlete.name}
         </Link>;
      })}
      </nav>
    );
  }
}
