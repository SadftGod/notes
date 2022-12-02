import React from 'react';
import './dist/TodoPage.css';
import ToDoApp from '../../components/ToDoApp/ToDoApp'



class TodoPage extends React.Component {
         render(){
            return(
               <div className="to-do-page">
                  <h1>Activitious</h1>
                  <ToDoApp />
               </div>
            )
         }
}



export default TodoPage;
