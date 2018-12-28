import React, {Component} from 'react';
import Character from './Character';
import characters from '../characters.json';
import './style.css';

class Game extends Component {
  state = {

  }

  render () {
    return (
      <div className="container">
        <div>
          score: 0
        </div>
        <div className="row">
          {characters.map(character => {
            return (
              <Character image={character.image}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Game;  