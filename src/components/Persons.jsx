import React from 'react';
import Person from './Person'

function Persons() {

    const personsData = [ 
        {
            "name" : "Thor" ,
            "age" : 25 ,
            "description" : "An Avenger and known as Lighing",
            "isEditMode" : true
        },
        {
            "name" : "Iron Man" ,
            "age" : 34 ,
            "description" : "An Avenger and known as Iron man",
            "isEditMode" : false
        },
        {
            "name" : "Wonder Woman" ,
            "age" : 20 ,
            "description" : "super hero girl",
            "isEditMode" : true
        }
    ]

  return (
    <div className="Persons">
      {
          personsData.map( person =>
            <Person person ={ person} />  ) 
      }
    </div>
  );
}

export default Persons;
