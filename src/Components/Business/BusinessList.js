import React from 'react';

const BusinessList = ({ item }) => {
    return (
        <>
             <article className="card container mb-4 col">
              <header className="card-header">
                <div className="card-meta">
                  <time className="timeago">{item.publishedAt}</time><br />
                </div>
                <p>Author<strong> : {item.author}</strong></p>
                  <h4 className="card-title">{item.title}</h4>
              </header>
               <img className="card-img item" src={item.urlToImage} alt="news" />
             <div className="card-body">
                <p className="card-text">{item.description}</p>
              </div>
              <a href={item.url}>
                  <p className="btn btn-secondary">Read More</p>
              </a>
            </article>
        </>
    );
};

export default BusinessList;