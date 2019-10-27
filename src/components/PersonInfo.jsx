import React from 'react';
import './PersonInfo.css'
import PropType from 'prop-types';
// import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

export default function PersonInfo(props) {
    return (
        <div className="PersonInfo">

            <h1> {props.person.name} ,  {props.person.age} </h1>
            <p> {props.person.description} </p>
            <span>
                <Fab className="button" color="secondary" aria-label="edit" onClick={props.jabEditButtonClickHoToKyaKro} >
                    <EditIcon /> </Fab>
                <Fab className="button" color="primary" aria-label="delete" >  <DeleteIcon /> </Fab>
            </span>

        </div>
    )
}


PersonInfo.propTypes = {
    person: PropType.object,
    jabEditButtonClickHoToKyaKro: PropType.func
}

