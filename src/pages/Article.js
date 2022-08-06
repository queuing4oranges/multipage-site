import { useParams, useHistory } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

import React, { useEffect } from 'react';

export default function Article() {
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/'+id     //concatenating id of specific article
    const { data: article, isPending, error } = useFetch(url)
    const history = useHistory()        //we need to invoke the fct so it can return an object to us that we can than use
  
    useEffect(() =>{        //function will run once in the beginning, but we only want to redirect when there actually is an error
        if(error){
            //redirect
            //history.goBack()      //one possiblity, but we'll be using an alternative
            setTimeout(() => {history.push('/')}, 2000)     //setting timeout so user can read message           
        }
    }, [error])

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