import React from 'react';

const Score = props => {
  return (
    <div className="row">
      <div className="col s12 m4">
        <p className="flow-text">{props.message}</p>
        <ul className="collection">  
          <li className="collection-item">Score: <span className="badge orange white-text">{props.score}</span></li>
          <li className="collection-item">High Score: <span className="badge green white-text">{props.highScore}</span></li>
        </ul>         
      </div>
    </div>
  )
}

export default Score;