import React from 'react'
import useHome from './useHome';

const Home = () => {
    const { tasks } = useHome();
    console.log(tasks);
  return (
    <div>Home Page</div>
  )
}

export default Home