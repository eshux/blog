import React from 'react';
import { Link } from 'react-router-dom';
import { H1, H3 } from '../components/Typography/Typography';


const NotFound = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <H1>Error 404</H1>
            <H3>The page you are looking for doesn't exist</H3>
            <Link className="nav__item" to="/">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
