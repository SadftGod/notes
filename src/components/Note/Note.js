import React from 'react';
import './dist/Note.css';



class Note extends React.Component {
   render(){
      return(
         <div className="Note" style={{backgroundColor : this.props.color}}>
            <button onClick={()=>{this.props.deleteNote(this.props.id)}} className="delete-btn"></button>
            <div className="title-note">{this.props.title}</div>
            <div className="text-note">{this.props.text}</div>
         </div>
      )
   }
}



export default Note;
