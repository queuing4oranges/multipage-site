import { useState, useEffect } from 'react';

export const useFetch = (url) =>{
    const [data, setData] = useState(null)          //bc it should be generic - might not always be trips we're fetching
    const [isPending, setIsPending] = useState(false) //when we start fetch, we'll change pending to true, when fetch is complete, we'll set it to false - then show the data
    const [error, setError] = useState(null)            //null bc we dont have an error to begin with


    useEffect(()=>{                                 //when we write the fct inside the useEffect, we dont have to pass it in as a dependency (it's not always possible - then useCallback)

        const controller = new AbortController()    //make a new Abortcontroller and save it into variable controller


        const fetchData = async () => {             //fct DIRECTLY in useEff cant be async, but fct inside fct CAN!
            
            setIsPending(true)  
                                                    //before we fetch data - setPending to true 
            try{                                    //we set up a try block for error handling
            const response = await fetch(url, { signal: controller.signal})   //fetch request has a second argument - options argument, this is where you can specifiy headers, or method (get/post)
                                                    //the signal associates with our AbortController (controller)
            if(!response.ok){
                throw new Error(response.statusText)
            }                                        
            console.log(response)
            const json = await response.json()      //next we need to update our state:
            
            setIsPending(false)            

            setData(json)
            setError(null)                          //if we try something and there's no error, set error back to null
            } catch (err) {                         //we set up a catch block to catch the error

            if (err.name === "AbortError"){         //here we're defining the abort error
                console.log("The fetch was aborted.")
                }else{            setError('Could not fetch the data')
                setIsPending(false)
                console.log(err.message)                //err has a message property
                }               
            }              

        }                                           //so far fct is created, but not invoked - that's what we need to do here:

        fetchData()
        return () =>{                               //in this fct we will abort any fetch requests if there is an error
            controller.abort()                      //this method
        }
    }, [url])

    return { data: data, isPending, error}                             //we're returning here an object, so a data property which is using the data state
                                                    //we could actually shorten this to { data }
}



//now we can use this hook in the TripList component!

//try catch block is just a way to handle errors