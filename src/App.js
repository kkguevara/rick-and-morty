import './App.css';
import Cards from './components/Cards.jsx';
import Nav  from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation } from 'react-router-dom';


function App() {
   const location = useLocation()  
   const [characters, setCharacters] = useState([]);

   const onSearch= (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {        
         setCharacters((oldChars) => [...oldChars, data]);
      }).catch(()=> alert('¡No hay personajes con este ID!'));
   }
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {location.pathname !== '/'
          ? <Nav onsearch={onSearch} />
          : null
         }
         <Routes>
            <Route path='/' element={<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
     
      </div>
   );
}

export default App;
