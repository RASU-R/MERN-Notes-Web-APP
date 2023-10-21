import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import NotesList from '../../components/NotesList';
import { useParams } from "react-router-dom";
import Search from '../../components/Search';

import NavBar from '../navBar';

const App=()=>{
  useEffect(()=>{
    getNotes(); 
  },[]);
  const[notes,setNotes]=useState([]);
  const [searchText,setSearchText]=useState('');
  const [darkMode,setDarkMode]=useState(false);
  const [name,setName]=useState('');

  const token=useSelector((state)=>state.token);
  const { _id, picturePath } = useSelector((state)=>state.user);
  
  const getNotes=async()=>{
    const response=await fetch(`http://localhost:3001/users/${_id}/notes`,{
      method:"GET",
      headers:{Authorization:`Bearer ${token}`}
  });
    const savedNotes=await response.json();
    setName(savedNotes.firstName+" "+savedNotes.lastName);
    if(savedNotes){
     setNotes(savedNotes.note);
    }
  };

const addNote=async(text)=>{
  const response=await fetch(`http://localhost:3001/users/${_id}/newnotes`,{
    method:"POST",
    headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json',},
    body:JSON.stringify({text})
});
const savedNotes=await response.json();
if(savedNotes){
 setNotes(savedNotes.note);
}
};

const deleteNote=async(nid)=>{
  const response=await fetch(`http://localhost:3001/users/${_id}/${nid}`,{
    method:"GET",
    headers:{Authorization:`Bearer ${token}`}
});
const savedNotes=await response.json();
if(savedNotes){
 setNotes(savedNotes.note);
}
};

  return( 
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
            
            <NavBar 
             handleToggleDarkMode={setDarkMode}
             fullName={name}
             picturePath={picturePath}
            />
           

            <Search
            handleSearchNote={setSearchText}
            
            />
           
            <NotesList 
            notes={notes.filter((note)=> 
              note.text.toLowerCase().includes(searchText)
              )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            />
        </div>


    </div>

    
  )

}

export default App