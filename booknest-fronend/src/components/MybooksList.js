import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "../css/MybooksCard.css"


function MybooksList() {
    const [books, setBooks] = useState([{
        title: "",
        author: "",
        genre: "",
    }])

    useEffect(()=>{
    axios.get("http://localhost:5000/")
    .then(({data})=>{
        setBooks(data)
       
    })
    })
     



    return (
        <div className = "container">
            <h1> My Books</h1>
            <>
            {books.map(book =>  
            <div>          
                <h5  > Title:{book.title}, Author:{book.author}, Genre:{book.genre} </h5>

                </div>
                )}
            </>
        </div>
       
    )
}

export default MybooksList

