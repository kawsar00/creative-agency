import React from 'react';
import './Feedback.css'
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import FeedbackPost from '../FeedbackPost/FeedbackPost';
const feedbackData = [
  {
    author: 'Nash Patrik',
    title: 'CEO, Manpol',
    authorImg: customer1,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
  },
  {
    author: 'Bria Malone',
    title: 'CEO, Manpol',
    authorImg: customer2,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
  },
  {
    author: 'Miriam Barron',
    title: 'CEO, Manpol',
    authorImg: customer3,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
  },
]

const Feedback = () => {
  return (
    <section className=" feedback-container">
      <div className="container-fluid">
        <h2 className='text-center font-weight-bold py-5'>Clients <span style={{ color: '#7AB259' }} >Feedback</span></h2>
        <div className="row pt-5">
          {
            feedbackData.map(feedback => <FeedbackPost feedback={feedback}></FeedbackPost>)
          }
        </div>
      </div>
    </section>
  );
};

export default Feedback;