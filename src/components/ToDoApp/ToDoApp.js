import React from 'react';
import './ToDoApp.styl';
import ToDoEditor from '../ToDoEditor/ToDoEditor'
import ToDoGrid from '../ToDoGrid/ToDoGrid'


class ToDoApp extends React.Component {
  
   render(){
      return(
         <div className="ActivitiesApp">
             <ToDoEditor />
             <ToDoGrid />
         </div>
      )
   }
}



export default ToDoApp;
