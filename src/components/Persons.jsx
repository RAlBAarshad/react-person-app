import React from 'react';
import Person from './Person'
import './Persons.css'


function Persons() {

    const personsData = [ 
        {
            "name" : "Thor" ,
            "age" : 25 ,
            "description" : "An Avenger and known as Lighing",
            "isEditMode" : false
        },
        {
            "name" : "Iron Man" ,
            "age" : 34 ,
            "description" : "An Avenger and known as Iron Man",
            "isEditMode" : false
        },
        {
            "name" : "Wonder Woman" ,
            "age" : 20 ,
            "description" : "Super Hero Girl",
            "isEditMode" : false
        }
    ];

    
    const enableEdit = () => { 
      // props.person.isEditMode = true; 
      alert( 'hello I am your grandfather ') 
  }

  return (
    <div className="Persons">

      <h1 className="persons-h1"> PERSONS </h1>

      {
          personsData.map( person =>
            <Person person ={ person} 
            callMeWhenYouWantToEnableEdit={enableEdit}/>  ) 
      }
    </div>
  );
}

export default Persons;
