import React from 'react';
import './dist/NoteGrid.css';
import Note from '../Note/Note'
import Masonry from 'masonry-layout'


class NoteGrid extends React.Component {

   

   componentDidMount() {
      this.masonry = new Masonry('.NoteGrid',{
         itemSelector: '.Note',
         columnWidth: 260
      }) 
   }
   componentDidUpdate(prevProps){  
      if(this.props.notes.length !== prevProps.notes.length){
         this.masonry.reloadItems()
         this.masonry.layout()
      }

   }

   render(){
      return(
         <div className="NoteGrid">
            {
               this.props.notes.map((note) =>{
                  return (
                     <Note 
                        key = {note.id} 
                        id = {note.id}
                        title = {note.title}
                        text = {note.text}
                        color = {note.color}
                        deleteNote = {this.props.deleteNote}
                     />
                  )      
               })
            }
            
         </div>
      )
   }
}


export default NoteGrid;
