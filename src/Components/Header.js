import React from 'react';
import './Header.css';
import image from '../news.jpg';

const Header = () => {

    const style = {
        backgroundImage: 'url(../news.jpg)'
    }
    return (
        <div>
        <header className="masthead" style={style}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
        </div>
    );
};

export default Header;