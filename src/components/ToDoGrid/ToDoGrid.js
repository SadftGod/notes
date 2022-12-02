import React from 'react';
import './ToDoGrid.styl';
import ToDo from '../ToDo/ToDo'


class ToDoGrid extends React.Component {
   render(){
      let item = this.props.items.map((item, index) => {
        return (
          <ToDo key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
      return (
        <ul className="list-group"> {item} </ul>
      );
    }
}

export default ToDoGrid;
