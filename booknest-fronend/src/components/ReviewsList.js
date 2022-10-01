import React, {useState, useEffect} from 'react'

function ReviewList() {
  const [review, setReview] = useState([{
    title: '', 
    content: ''
  }])

  useEffect(()=> {
    fetch("http://localhost:5000/review")
    .then(res =>  res.json())
    .then(jsonRes => setReview(jsonRes))
    
    },[])
 
  return (
    <div > 
      
     {review.map(review => 
      <div >
      <h4>{review.title}</h4>
      <h6>{review.content}</h6>
      </div>)}
      
    </div>

  )
}

export default ReviewList