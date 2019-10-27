import React from 'react';
import './Person.css';
import PersonEdit from './PersonEdit'
import PersonInfo from './PersonInfo';
import PropType from 'prop-types'



export default function Person(props) {


    return (
        <div className="Person">
            {
                props.person.isEditMode ?
                <PersonEdit person={props.person} /> :
                <PersonInfo person={props.person}
                jabEditButtonClickHoToKyaKro={props.callMeWhenYouWantToEnableEdit} />
            }
        </div>
    )
}


Person.propTypes = {
    person: PropType.object,
    callMeWhenYouWantToEnableEdit: PropType.func

}




