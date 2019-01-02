import React, {Component} from 'react';
import Character from './Character';
import Score from './Score';
import characters from '../characters.json';
import './style.css';

class Game extends Component {
  state = {
    characters: characters,
    score:  0,
    highScore: 0
  }

  componentDidMount = () => {
    this.setState({
      characters: this.state.characters.sort(() => 0.5 - Math.random())
    });
  }

  handleClick = id => {
    // get the index location of object 
    id = this.state.characters.findIndex(i => i.id === id);

    // check if image has been clicked.
    if(this.state.characters[id].clicked) {
      // end game!!
      this.setState({
        message: "You guessed incorrectly!! Try again!!!"
      })

      // check if current score is greater then high score
      if(this.state.score > this.state.highScore) {
        this.setState({
          score: 0,
          highScore: this.state.score
        })
      } else {
        this.setState({
          score: 0,
          characters: characters
        })
      }
    } else {

      // if all 12 pictures have been clicked user wins!
      if(this.state.score === 12) {
        
      }

      // get state's copy and reassign it when user clicks on an image
      let stateCopy = Object.assign({}, this.state);
      stateCopy.characters = stateCopy.characters.slice();
      stateCopy.characters[id] = Object.assign({}, stateCopy.characters[id]);

      // set the image state to clicked
      stateCopy.characters[id].clicked = true;
      stateCopy.score += 1 // add 1 to score

      // notify user guessed correctly
      stateCopy.message = "You guessed correctly!!"

      // put images in random order
      stateCopy.characters =  stateCopy.characters.sort(() => 0.5 - Math.random());

      // set the new state
      this.setState(stateCopy);
    }
  }

  render () {
    return (
      <div className="container">
        <Score 
          score = {this.state.score}
          highScore = {this.state.highScore}
          message = {this.state.message}
        />
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