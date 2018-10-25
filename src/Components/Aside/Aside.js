import React from 'react';

const Aside = () => {
    return (
        <div>
             <nav id="sidebar"
                  style={{
                    paddingLeft: "25px",
                    color: "white",
                 }}
             >
        <div className="sidebar-header">
            <h3>Links</h3>
        </div>
           <ul className="line">
            <p>Latest News</p>
            <li>
                <a href="/headlines">Top Headlines</a>
            </li>
            <hr />
            <li>
                <a href="/business">Business News</a>
            </li>
            <hr />
              <li>
                <a href="/sport">Sport News</a>
            </li>
            <hr />
            <li>
                <a href="/fashion">Fashion News</a>
            </li>
            <hr />
            <li>
                <a href="/music">Music News</a>
            </li>
            <hr />
            <li>
                <a href="/technology">Technology News</a>
            </li>
            <hr />
        </ul>

    </nav>
        </div>
    );
};

export default Aside;