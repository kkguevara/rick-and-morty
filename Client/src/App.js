import './App.css';
import Cards from './components/Cards.jsx';
import Nav  from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const email = 'katerineg147@gmail.com';
const password ='2704kt';
 

function App() {
   const location = useLocation();  
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
        setAccess(true);
        navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch= (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path= '/favorites' element={<Favorites/>} />
         </Routes>
     
      </div>
   );
}

export default App;
