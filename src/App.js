import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage/AboutPage'
import NotesPage from './pages/NotesPage/NotesPage'
import ToDoPage from './pages/TodoPage/TodoPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Contact from './pages/Contact/Contact'



function App() {
  return (
    <div className="App">
       <Router>
         <NavBar />
         <div className="container">
            <Routes >
               <Route path="" element={<AboutPage />} />
               <Route path="notes" element={<NotesPage />} />
               <Route path="todo" element={<ToDoPage />} />
               <Route path="*" element={<NotFoundPage />} />
               <Route path="contacts" element={<Contact />} />
            </Routes>
         </div>
       </Router>
    </div>
  );
}

export default App;
