import React from 'react';
import PropType from 'prop-types';

export default function PersonEdit(props) {
  return (
    <div className="PersonEdit">
        <h1> edit mode not working proper </h1>
        {/* <input type="text" value= {props.person.name} /> 
        <input type="number" value={props.person.age} />
        <textarea> { props.person.description} </textarea>  */}
    </div>
  )
}

PersonEdit.propTypes = {
    person: PropType.object
}

