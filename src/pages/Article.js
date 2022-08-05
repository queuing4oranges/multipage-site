import { useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

import React from 'react';

export default function Article() {
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/'+id     //concatenating id of specific article
    const { data: article, isPending, error } = useFetch(url)
  
  return (
    <div>
        {isPending && 
            <div>Loading...</div>}
        {error && 
            <p>{error}</p>}
        {article && 
            (<div>
                <h2>{article.title}</h2>
                <p>By {article.author}</p>
                <p>{article.body}</p>
                
            </div>)}

    </div>
  )
}



//extracting route parameter so we can show the corresponding article (not just Article.js component)