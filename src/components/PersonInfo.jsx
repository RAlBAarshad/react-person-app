import React from 'react';
import PropType from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function PersonInfo(props) {
    return (
        <div className="PersonInfo">
            <h1> {props.person.name} ,  {props.person.age} </h1>
            <p> {props.person.description} </p>
            <button> edit </button>
            <button> delete </button>
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </div>
    )
}


PersonInfo.propTypes = {
    person: PropType.object
}

