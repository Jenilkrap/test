import React from 'react';
import Amazing from '../../Components/HomeComponent/Amazing/Amazing';
import Subscribe from '../../Components/HomeComponent/Subscribe/Subscribe';
import Create from '../../Components/HomeComponent/Create/Create';
import Popular from '../../Components/HomeComponent/Popular/Popular';
const Home = () => {
  return (
    <div>
      <Create/>
      <Amazing/>
      <Popular/>
      <Subscribe/>
    </div>
  );
}

export default Home;
