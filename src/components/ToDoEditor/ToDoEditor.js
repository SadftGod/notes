import React from 'react';
import './dist/ToDoEditor.css';


class ToDoEditor extends React.Component {
   constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      this.refs.itemName.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;
      
      if(newItemValue) {
        this.props.addItem({newItemValue});
        this.refs.form.reset();
      }
    }
   render() {
      return (
         <div className="ActivitiesEditor">
         <div className="ent-container">
            <input onChange={this.titleChange} placeholder="Title" className="title-editor" type="text" value={this.state.title} />
            <button onClick={this.ChangePalitre} className="change"></button>
            <button ref={this.addBtn} onClick={this.addActivities} className="submit"></button>
         </div>
      </div>
      )
   }
}



export default ToDoEditor;
