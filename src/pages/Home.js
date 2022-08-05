import React from 'react';
import { useFetch } from '../hooks/useFetch';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')   //data:articles -> we want to refer to data as 'articles'


  return (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>} 
      {error && <div>{error}</div>} 
      {articles && articles.map((article) => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`} >Read more...</Link>
        </div>
      )
      )}    
    </div>
  )
}

//if we write only articles.map (without articles &&) -> would give an error, cause articles is null at the beginning (mapping on null!)
//inside articles.map - fire a function for each article