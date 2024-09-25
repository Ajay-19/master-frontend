import React from 'react'

function ListParent({parent}) {
  return (
    <div>
      {parent.map((person)=><h3 key={person.id}>I am {person.name} and I am {person.age} years old and I know {person.skill}</h3>)}
    </div>
  )
}

export default ListParent
