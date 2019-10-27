import React from 'react';
import './PersonEdit.css'
import PropType from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';


export default function PersonEdit(props) {
  return (
    <div className="PersonEdit">
      <h1>Edit Mode </h1>
      <input type="text" value={props.person.name} />
      <input type="number" value={props.person.age} />
      <input value={props.person.description} />
      <span>
        <Fab className="button" color="secondary" aria-label="edit" >  <CheckIcon /> </Fab>
        <Fab className="button" color="primary" aria-label="delete" >  <CloseIcon /> </Fab>
      </span> 
{/* 
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>
            <CheckIcon />
        </Button>

        <Button>
          <CloseIcon /> 
        </Button>

      </ButtonGroup> */}
    </div>
  )
}

PersonEdit.propTypes = {
  person: PropType.object
}

