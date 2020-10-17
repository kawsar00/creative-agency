import React, { useEffect, useState } from 'react';
import FeedbackPost from '../FeedbackPost/FeedbackPost';





const Feedback = () => {
  const [reviewData, setReviewData] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => {
        setReviewData(data)
      })
  }, [])

  return (
    <section className=" feedback-container">
      <div className="container-fluid">
        <h2 className='text-center font-weight-bold py-5'>Clients <span style={{ color: '#7AB259' }} >Feedback</span></h2>
        <div className="row pt-5">
          {
            reviewData.map(feedback => <FeedbackPost feedback={feedback}key={feedback._id}></FeedbackPost>)
          }
        </div>
      </div>
    </section>
  );
};

export default Feedback;