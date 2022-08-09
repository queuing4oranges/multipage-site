import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Contact() {

  //gets query string from path in browser:
  const queryString = useLocation().search
  console.log(queryString)

  //making new object, so we can use the data from above
  const queryParams = new URLSearchParams(queryString)

  //on that object we have a specific GET method to get a specific parameter
  const name = queryParams.get("name")

  //we can output that also in the browser like this:
  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente voluptatum dolorem, 
          voluptate veritatis quasi cum ipsa, natus maxime distinctio, ipsum fugiat eos! Cupiditate, 
          quibusdam. Autem delectus alias impedit quibusdam.</p>
    </div>
  )
}
