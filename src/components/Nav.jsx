import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

const Nav = ({ onsearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onsearch} />
            <button>
               <Link to= '/about' >ABOUT</Link> 
            </button>

            <button>
               <Link to= '/home' >HOME</Link> 
            </button>
           
        </nav>
    );
 }

export default Nav
 