import React from 'react';
import './ToDo.styl';


class ToDo extends React.Component {
   constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
   render() {
      return (
         <div className="ToDo">
         ToDo Component
       </div>
      )
   }
}



export default ToDo;
