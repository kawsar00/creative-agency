import React from 'react';
import Category from '../Category/Category';
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
    </div>
  );
};

export default Home;