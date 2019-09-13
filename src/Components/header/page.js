import React from 'react';
import { Link } from 'react-router-dom';

function Page() {
  return(
    <nav className="menu">
      <div className="container container-links">
        <div className="logo">
          <Link to="/">StudioDev</Link>
        </div>

        <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/articles">ARTICLES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}

export default Page;

