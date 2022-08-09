import React from 'react'

const NoteList = (props) => {

function deleteItem(){
    props.onDelete(props.id);

}
  return (
    <div>
    <h1>{props.title}</h1>
    <h2> {props.content}</h2>
    <button onClick={deleteItem} type='button'> Delete</button>
    </div>
  )
}

export default NoteList