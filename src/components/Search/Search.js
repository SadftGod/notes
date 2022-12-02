import React from 'react';
import './dist/Search.css';



class Search extends React.Component {
   constructor(props) {
      super(props);

      this.inside = this.inside.bind(this);
   }


   inside(e){
      let targ = e.target.value
      this.props.searchFilter(targ);
      console.log(targ)
   }
   render() {
      return (
         <div className="Search">
            <input onChange={this.inside} className="feld" placeholder="Today is the best day!" type="text" />
         </div>
      )
   }
}




export default Search;
