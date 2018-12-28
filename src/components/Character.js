import React from 'react';

const Character = (props) => {
  return (
    <div className="col s3" onClick={()=> props.handleClick(props.id)}>
      <div className="card-panel ">
        <div className="card-image valign-wrapper">
          <img 
            src={props.image}
            alt="Character"
          />
        </div>
      </div>
    </div>    
  )
}

export default Character;