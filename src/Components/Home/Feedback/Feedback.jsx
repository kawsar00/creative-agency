import React, { useEffect, useState } from 'react';
import FeedbackPost from '../FeedbackPost/FeedbackPost';
import spinner1 from '../../../images/spinner1.gif';






const Feedback = () => {
  const [reviewData, setReviewData] = useState([])


  useEffect(() => {
    fetch('https://murmuring-lowlands-09512.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => {
        setReviewData(data)
      })
  }, [])

  return (
    <section className=" feedback-container">
      <div className="container-fluid">
        <h2 className='text-center font-weight-bold py-5'>Clients <span style={{ color: '#7AB259' }} >Feedback</span></h2>
        <div className="row pt-5 container-fluid">
        {
            reviewData.length === 0 && <img src={spinner1} alt="" className="m-auto"/>
          }
          {
            reviewData.map(feedback => <FeedbackPost feedback={feedback} key={feedback._id}></FeedbackPost>)
          }
        </div>
      </div>
    </section>
  );
};

export default Feedback;