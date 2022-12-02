import React from 'react';
import './dist/NoteEditor.css';


class NoteEditor extends React.Component {
   constructor(props) {
      super(props)
      this.state ={text:'',title:'',color:''}

      this.addBtn = React.createRef()
      this.palitre1 = React.createRef()
      this.palitre2 = React.createRef()

      this.ChangePalitre = this.ChangePalitre.bind(this)
      this.textChanger = this.textChanger.bind(this)
      this.titleChange = this.titleChange.bind(this)
      this.addNote = this.addNote.bind(this)
      this.darkRed = this.darkRed.bind(this)
      this.darkViolet = this.darkViolet.bind(this)
      this.darkYellow = this.darkYellow.bind(this)
      this.darkGrey = this.darkGrey.bind(this)
      this.darkBlue = this.darkBlue.bind(this)
      this.darkGreen = this.darkGreen.bind(this)
      this.darkPink = this.darkPink.bind(this)
      this.Red = this.Red.bind(this)
      this.Violet = this.Violet.bind(this)
      this.Yellow = this.Yellow.bind(this)
      this.White = this.White.bind(this)
      this.Blue = this.Blue.bind(this)
      this.Green = this.Green.bind(this)
      this.Pink = this.Pink.bind(this)
      
   }

   textChanger(e){
      this.setState({text:e.target.value})
   }
   titleChange(t){
      this.setState({title:t.target.value})
   }
   
   ChangePalitre(){
      if(this.palitre1.current.style.display === "none"){
         this.palitre1.current.style.display = "block"
         this.palitre2.current.style.display = "none"
      }else{
         this.palitre2.current.style.display = "block"
         this.palitre1.current.style.display = "none"
      }
         
   }


   

   //colors
   darkRed(){
      this.setState({color: '#7C0000'})
      this.addBtn.current.style.border = '3px solid #7C0000'
   }
   darkViolet(){
      this.setState({color: '#64007C'})
      this.addBtn.current.style.border = '3px solid #64007C'
   }
   darkYellow(){
      this.setState({color: '#b8b501'})
      this.addBtn.current.style.border = '3px solid #b8b501'
   }
   darkGrey(){
      this.setState({color: '#ABABAB'})
      this.addBtn.current.style.border = '3px solid #ABABAB'
   }
   darkBlue(){
      this.setState({color: '#001460'})
      this.addBtn.current.style.border = '3px solid #001460'
   }
   darkGreen(){
      this.setState({color: '#006108'})
      this.addBtn.current.style.border = '3px solid #006108'
   }
   darkPink(){
      this.setState({color: '#930094'})
      this.addBtn.current.style.border = '3px solid #930094'
   }
   //light colors
   Red(){
      this.setState({color: '#ff0000'})
      this.addBtn.current.style.border = '3px solid #ff0000'
   }
   Violet(){
      this.setState({color: '#6f00ff'})
      this.addBtn.current.style.border = '3px solid #6f00ff'
   }
   Yellow(){
      this.setState({color: '#fffb00'})
      this.addBtn.current.style.border = '3px solid #fffb00'
   }
   White(){
      this.setState({color: '#ffffff'})
      this.addBtn.current.style.border = '3px solid #ffffff'
   }
   Blue(){
      this.setState({color: '#0033ff'})
      this.addBtn.current.style.border = '3px solid #0033ff'
   }
   Green(){
      this.setState({color: '#00ff15'})
      this.addBtn.current.style.border = '3px solid #00ff15'
   }
   Pink(){
      this.setState({color: '#ff00ff'})
      this.addBtn.current.style.border = '3px solid #ff00ff'
   }

   addNote(){
      let newNode = {
         id: Date.now(),
         title: this.state.title ,
         text: this.state.text,
         color: this.state.color
      }
      this.setState({text:'',title:'',color:''})

      
      this.props.noterAdd(newNode)
   }
   render(){
      return(
         <div className="NoteEditor">
            <div className="ent-container">
               <input onChange={this.titleChange} placeholder="Title" className="title-editor" type="text" value={this.state.title} />
               <textarea onChange={this.textChanger} className="title-text" autoCorrect='on' placeholder="Enter the text" cols="90" rows="5" value={this.state.text}></textarea>
               <div ref={this.palitre1} className="colors-diversity-dark">
                  <button onClick={this.darkRed} className="color1"></button>
                  <button onClick={this.darkViolet} className="color2"></button>
                  <button onClick={this.darkYellow} className="color3"></button>
                  <button onClick={this.darkGrey} className="color4"></button>
                  <button onClick={this.darkBlue} className="color5"></button>
                  <button onClick={this.darkGreen} className="color6"></button>
                  <button onClick={this.darkPink} className="color7"></button>
               </div>
               <div ref={this.palitre2} className="colors-diversity-light">
                  <button onClick={this.Red} className="colorl1"></button>
                  <button onClick={this.Violet} className="colorl2"></button>
                  <button onClick={this.Yellow} className="colorl3"></button>
                  <button onClick={this.White} className="colorl4"></button>
                  <button onClick={this.Blue} className="colorl5"></button>
                  <button onClick={this.Green} className="colorl6"></button>
                  <button onClick={this.Pink} className="colorl7"></button>
               </div>
               <button onClick={this.ChangePalitre} className="change"></button>
               <button ref={this.addBtn} onClick={this.addNote} className="submit"></button>
            </div>
         </div>
      )
   }
}



export default NoteEditor;
