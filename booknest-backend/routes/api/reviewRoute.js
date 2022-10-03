const router = require('express').Router();
let Review = require ("../../models/reviewModel");


//  handles the route to get all the books in My Books
router.get('/',(req, res) => {
    Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: '+ err));
});

//  handles http add a book to MyBooks (post) request
router.route('/review/add').post((req, res) =>{
    // const user = req.body.user;
    const book = req.body.book;
    const author = req.body.author;
    const review = req.body.review;
    const rating = req.body.rating;

    const newReview = new Review({
    //    user,
       book,
       author,
       review,
       rating,

    });

    newReview.save()
    .then(() => res.json(`${book} Review has been added successfully`))
    .catch(err => res.status(400).json('Error: '+ err));
});



module.exports = router;