import React, {Component} from 'react';
// import Card from './Card';
import characters from '../characters.json';

console.log(characters);

class Game extends Component {
  render () {
    return (
      <div className="container">
        <div>
          score: 0
        </div>
        <div className="row">
          {characters.map(character => {
            return (
              <div className="col s3">
                <div className="card-panel">
                  <div className="responsive-image circle">
                    <img 
                      src={character.image}
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Game;  