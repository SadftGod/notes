import React from 'react';
import NoteGrid from '../NoteGrid/NoteGrid';
import NoteEditor from '../NoteEditor/NoteEditor'
import Search from '../Search/Search'
import './dist/NoteApp.css';



class NoteApp extends React.Component {
   constructor(props) {
      super(props)
      this.state = {notes: []}
      
      this.noteAdd = this.noteAdd.bind(this)
      this.deleteNotepls = this.deleteNotepls.bind(this)
      this.searchFilter = this.searchFilter.bind(this)
   }
   componentDidMount() {
      let str = localStorage.getItem('notes')
      let localNotes = JSON.parse(str)
      if(localNotes != null) {
         this.setState({notes: localNotes})
      }
   }
   componentDidUpdate(){
      let note = JSON.stringify(this.state.notes)
      localStorage.setItem('notes', note)
   }

   noteAdd(newNote){
      let medie = this.state.notes.slice()
      medie.unshift(newNote)
      this.setState({notes: medie})
   }
   deleteNotepls(id){
      let done = this.state.notes.filter(note => note.id !== id)
      this.setState({notes: done})
   }

   searchFilter(targ){
      let filtered = this.state.notes.filter(notes => notes.title.includes(targ) || notes.text.includes(targ))
   
      this.setState({notes: filtered})
   }

   render(){
      return(
         <div className="NoteApp">
             <Search searchFilter = {this.searchFilter} />
             <NoteEditor noterAdd = {this.noteAdd}  />
             <NoteGrid notes = {this.state.notes} deleteNote={this.deleteNotepls}/>
         </div>
      )
   }
}



export default NoteApp;
