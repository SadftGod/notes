import React from 'react';
import './dist/AboutPage.css';

class AboutPage extends React.Component {
   render(){
      return(
         <div className="about-page">
            <header>
            </header>
            <div className="text-container">
               <h1 className="bout-title">“Wrote - saved, if necessary - deleted. Everything is simple and without unnecessary troubles</h1>
               <ul>
                  <li><img src="i1.png" alt="" />Convenient editing of notes with a choice of colors and the ability to delete unnecessary ones.</li>
                  <li><img src="i3.png" alt="" />It's simple, it's comfortable, it's stylish.</li>
                  <li><img src="i2.png" alt="" />A separate tab for active daily tasks that need to be completed in the near future.</li>
                  <li><img src="i4.png" alt="" />The task will not be deleted until you need it.</li>
                  <li>The project is developing, you can leave a review or contact us directly with complaints or suggestions via the contacts link or from the menu in the upper right corner.</li>
               </ul>
            </div>
            <img className="mainpng" src="mm.png" alt="" />
         </div>
      )
   }
}





export default AboutPage;
