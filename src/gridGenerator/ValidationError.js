import React from 'react';
import './gridGenerator.css';

export default function ValidationError(props) {
  if (props.message) {
    return <div className='error'>{props.message}</div>;
  }

  return <></>;
}
