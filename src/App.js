import React,{useState} from 'react'
import CreateNote from './CreateNote';
import NoteList from './NoteList'

function App() {
const [noteArray, setNoteArray]=useState([]);

function noteGet(note){
 return(
  setNoteArray((preValue)=> {
    return [...preValue, note];
  }));
  
}

function onDelete(id){
  setNoteArray((prevValue)=>
  {
    return prevValue.filter((elem,index)=>{
      return index !==id;
    })
  })

}

  return (
    <div>
      <CreateNote putNote={noteGet} />
      {noteArray.map((e,index)=>{
        return(<NoteList 
          key={index}
          id={index}
          title= {e.title}
          content={e.content}
          onDelete= {onDelete}  />
      )
         
       
      })}

     
      
    </div>
  );
}

export default App;
