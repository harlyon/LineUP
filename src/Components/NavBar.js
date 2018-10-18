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
                    <a className="nav-link" href="/">Top Headlines</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Business News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Sport News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Fashion News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Music News</a>
                    </li>
                </ul>
                </div>

                {/* <div className="collapse navbar-collapse order-4 order-md-4" id="navbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="page-about.html">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="page-contact.html">Contact</a>
                    </li>
                </ul>
                <form className="form-inline" role="search">
                    <input className="search js-search form-control form-control-rounded mr-sm-2" type="text" title="Enter search query here.." placeholder="Search.." aria-label="Search" />
                </form>
                </div> */}
            </div>
            </nav>
      </header>
      <br />
    </div>
    );
};

export default NavBar;