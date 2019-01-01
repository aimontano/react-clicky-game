import React, {Component} from 'react';
import Character from './Character';
import characters from '../characters.json';
import './style.css';

class Game extends Component {
  state = {
    characters: characters,
    score:  0
  }

  componentDidMount = () => {
    this.setState({
      characters: this.state.characters.sort(() => 0.5 - Math.random())
    });
  }

  handleClick = id => {
    // check if image has been clicked.
    if(this.state.characters[id].clicked) {
      // end game!!
      alert("has been clicked, you lost!!");
    } else {
      // get state's copy and reassign it when user clicks on an image
      let stateCopy = Object.assign({}, this.state);
      stateCopy.characters = stateCopy.characters.slice();
      stateCopy.characters[id] = Object.assign({}, stateCopy.characters[id]);

      // set the image state to clicked
      stateCopy.characters[id].clicked = true;
      stateCopy.score += 1 // add 1 to score

      // put images in random order
      stateCopy.characters =  stateCopy.characters.sort(() => 0.5 - Math.random());

      // set the new state
      this.setState(stateCopy);
    }
  }

  render () {
    return (
      <div className="container">
        <div>
          score: 0
        </div>
        <div className="row">
          {this.state.characters.map(character => {
            return (
              <Character 
                image={character.image} 
                key={character.id} 
                handleClick={this.handleClick}
                id={character.id - 1}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Game;  