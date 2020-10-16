import React from 'react';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Service from '../Service/Service';
import WorkList from '../WorkList/WorkList';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Category></Category>
      <Service></Service>
      <WorkList></WorkList>
      <Feedback></Feedback>
      <Contact></Contact>
    </div>
  );
};

export default Home;