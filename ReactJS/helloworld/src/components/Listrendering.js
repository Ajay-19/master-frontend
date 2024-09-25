import React from "react"
import ListParent from "./ListParent"
const Listrendering = () =>
{
  const arr = ["Ajay","Siddu","Sara","Virat"]
  const arr2 = ["A","b","C"]
  const persons = [
    {
      id:1,
      name:"Ajay",
      age:25,
      skill:"reactjs"  
    },
    {
      id:2,
      name:"Siddu",
      age:26,
      skill:"javascript"
    },
    {
      id:3,
      name:"Sara",
      age:27,
      skill:"modelling"
    }]
  const names = arr.map((name)=><h2>{name}</h2>)//we will get a warning for this, becoz we didnt specify the key here
  const names2 = arr2.map((name,index)=><h2 key={index}>{name}</h2>)//using the index as key , only do it if you dont have the unique key
  // const personList = persons.map((person)=><h3>I am {person.name} and I am {person.age} years old and I know {person.skill}</h3>)
  //For modularity we implement the above code in Listparent function and accessed from there to diplay the respective result
  return(
    <>{names}{names2}
    <ListParent parent={persons}/>
    </>
  )
}

export default Listrendering