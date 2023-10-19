import React from 'react'
import useHome from './useHome';
import TaskCard from './components/TaskCard';
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const { tasks, handleDelete } = useHome();
  
  return (
    <ContentWrapper>
      <h1 className='text-3xl text-primary font-bold'>Tasks to be accomplished</h1>
      <div className='flex justify-between items-center my-4'>
        <p>Sort by</p>
        <Button variant="contained" endIcon={<AddIcon />} onClick={() => navigate("/add")}>
          Add Task
        </Button>
      </div>

      <div className=''>
        {tasks?.map((task) => <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          body={task.description}
          priority={task.priority}
          time={task.created_at}
          image={task.image}
          handleDelete={handleDelete}
        />)}
      </div>
    </ContentWrapper>
  )
}

export default Home