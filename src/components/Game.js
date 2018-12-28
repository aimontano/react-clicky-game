import React, {Component} from 'react';
import Character from './Character';
import characters from '../characters.json';
import './style.css';

class Game extends Component {
  state = {
    characters: characters
  }

  handleClick = id => {
    console.log(id);
  }

  render () {
    return (
      <div className="container">
        <div>
          score: 0
          {console.log(characters[0])}
        </div>
        <div className="row">
          {this.state.characters.map(character => {
            return (
              <Character 
                image={character.image} 
                key={character.id} 
                handleClick={this.handleClick}
                id={character.id}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Game;  