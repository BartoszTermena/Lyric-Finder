import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 mx-auto">Lyric Search</span>   
        </Link>
    </nav>
  )
}
export default Navbar;