import React from 'react'
import useHome from './useHome';
import TaskCard from './components/TaskCard';
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const { tasks } = useHome();
  
  return (
    <ContentWrapper>
      <h1 className='text-3xl text-indigo-950 font-bold'>Tasks to be accomplished</h1>
      <div className='flex justify-between items-center my-4'>
        <p>Sort by</p>
        <Button variant="contained" endIcon={<AddIcon />}>
          Add Task
        </Button>
      </div>

      <div className=''>
        {tasks?.map((task, index) => <TaskCard
          id={task.id}
          title={task.title}
          body={task.description}
          priority={task.priority}
          time={task.created_at}
          image={task.image}
        />)}
      </div>
    </ContentWrapper>
  )
}

export default Home