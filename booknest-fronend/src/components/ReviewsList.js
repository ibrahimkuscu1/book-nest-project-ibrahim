import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ReviewList() {
  const [reviews, setReview] = useState([{
    title:"",
    review:""
  }])

  useEffect(()=> {
    axios.get("http://localhost:5000/reviewRoute")
    .then(({data})=>{
      console.log(data)
        setReview(data)
    
    })
  })
 
  return (
    <div > 
      
     {reviews.map(e => 
      <div >
      <h6 key={e._id}> Book: {e.book}, Review:{e.review} </h6>
      </div>)}
      
    </div>

  )
}

export default ReviewList