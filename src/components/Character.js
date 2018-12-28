import React from 'react';

const Character = (props) => {
  return (
    <div className="col s3">
      <div className="card-panel ">
        <div className="card-image valign-wrapper">
          <img 
            src={props.image}
          />
        </div>
      </div>
    </div>    
  )
}

export default Character;