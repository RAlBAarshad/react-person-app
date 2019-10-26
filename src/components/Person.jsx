import React from 'react';
import PersonEdit from './PersonEdit'
import PersonInfo from './PersonInfo';
import PropType from 'prop-types'



export default function Person(props) {
 
    return (
        <div className="Person">
            {/* <PersonInfo person={props.person} />
            <PersonEdit person={props.person} /> */}
             { props.person.isEditMode ? <PersonEdit  person={props.person} /> : 
            <PersonInfo person={props.person} /> }    

        </div>
    )
}


Person.propTypes = {
    person: PropType.object
}




