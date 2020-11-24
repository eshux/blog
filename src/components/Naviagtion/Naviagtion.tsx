import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 nav">
          <Link className="nav__item" to="/">
            Home
          </Link>
          <Link className="nav__item" to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
