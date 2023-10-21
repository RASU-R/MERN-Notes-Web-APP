import React from 'react';
import Note from './Note';
import AddNote from './AddNote';


const NotesList=({
    notes,
    handleAddNote,
    handleDeleteNote,
})=>{
    return (
    <div className='notes-list'>
        {notes.map((no)=> (
         <Note
            id={no.id}
            text={no.text}
            date={no.date}
            handleDeleteNote={handleDeleteNote}
         
         />
        ) )}
          
            <AddNote handleAddNote={handleAddNote}/>

         </div>
    );
}

export default NotesList;