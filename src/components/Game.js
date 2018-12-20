import React, {Component} from 'react';

class Game extends Component {
  render () {
    return (
      <div className="container">
        <div>
          score: 0
        </div>
        <div className="row">
          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img 
                  src="https://vignette.wikia.nocookie.net/spongebob/images/a/a1/Primitive_Sponge.png/revision/latest?cb=20180803015718"
                  alt="Character"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;  