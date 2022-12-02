import React from 'react';
import './dist/NotesPage.css';
import NoteApp from '../../components/NoteApp/NoteApp'



class NotesPage extends React.Component {
   render(){
      return(
         <div className="notes-page">
            <NoteApp />
         </div>
      )
   }
}


export default NotesPage;
