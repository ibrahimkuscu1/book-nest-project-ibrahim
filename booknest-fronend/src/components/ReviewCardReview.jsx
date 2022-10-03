import React, {useState} from 'react'
import axios from "axios"
import '../css/Review.css'
import "../css/App.css"

function ReviewCardReview() {
   const [input, setInput] = useState({
    book: "", 
    review: ""
   })
  

  function handleChange(event){
    const {name, value} = event.target; 

    setInput(prevInput => {
      return {
        ...prevInput, 
        [name]: value,
      }
    })
  }
  function handleClick(event) {
    event.preventDefault(); 
    const newReview = {
      book:input.book, 
      review: input.review
    }
    axios.post("http://localhost:5000/review/add", newReview)
    .then((res)=> {
      console.log(newReview)
      res.send({newReview})
        })
    .catch(err => {
      console.log(err)
    })
  }



  return (
    <div className = 'container'>

      <form>
        <div className = 'form-group'>
        <input 
        className = 'form-control' 
        type="text" 
        placeholder="book" 
        onChange={handleChange} 
        name="book" 
        value={input.book}/>
        </div>

        <br></br>

        <div className = 'form-group'>
        <textarea 
        className = 'form-control' 
        name="review" 
        cols="50" 
        rows="10" 
        onChange={handleChange} 
        placeholder="write your review" 
        value={input.review}>
        </textarea>
        </div>

        <br></br>

        <button className = 'btn btn-lg btn-info'
        onClick={handleClick}>SUBMIT</button>
      
      </form>

    </div>
  )
}

export default ReviewCardReview