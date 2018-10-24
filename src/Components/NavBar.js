import React from 'react';

const NavBar = () => {
    return (
    <div>
        <header role="banner">
            <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
            <a className="navbar-brand mx-auto order-1 order-md-3" href="/">NewsLineø</a>
            <div className="container">
                <button className="navbar-toggler order-2 order-md-1" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse order-3 order-md-2" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/Headlines">Top Headlines</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/business">Business News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Sport News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/fashion">Fashion News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Music News</a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">Technology News</a>
                    </li>
                </ul>
                </div>
              </div>
            </nav>
      </header>
      <br />
    </div>
    );
};

export default NavBar;
