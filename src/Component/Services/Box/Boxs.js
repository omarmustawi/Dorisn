import "./Boxs.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function  Boxs(props) {
  return (
    <div className="oneBox">
      <span>
        <FontAwesomeIcon icon={props.icon} className="svg" />
      </span>
      <h6>{props.title}</h6>
      <p className="pBox">{props.text}</p>
    </div>
  )
} 

export default Boxs;