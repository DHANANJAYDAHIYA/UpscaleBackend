import React  from 'react';
// , {useState}
function Card(props) {
    return(
        
          <div className="card ">
            <img className="card-img-top" src={props.imge} alt="Card cap"/>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.des}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{props.createdat}</small>
            </div>
          </div>
    )
}
export default Card;