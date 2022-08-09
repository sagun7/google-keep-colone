import React,{useState} from 'react'

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title:'',
        content: ''
    })



function changeHandler(event){
    const {name, value} = event.target;

    setNote((preValue)=>{
        return {...preValue, [name]:value}
    })
  
}

function addNote(){
    props.putNote(note);
    
    setNote({
        title:'',
        content:'',
    });
};




  
return (
    <div>
        <form>
        <input type='text' placeholder='enter text title' onChange={changeHandler} value={note.title} name='title'/>
        <textarea row='' col= '' placeholder='enter content' onChange ={changeHandler} value={note.content} name='content'/>
        <br/>
        <button onClick={addNote} type='button'>Add</button>
        </form>
    </div>
  )
}

export default CreateNote