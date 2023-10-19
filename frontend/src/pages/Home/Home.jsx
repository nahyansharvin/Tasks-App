import React from 'react'
import useHome from './useHome';
import TaskCard from './components/TaskCard';
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper';
import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = () => {
  const navigate = useNavigate();
  const { tasks, handleDelete, filter, setFilter } = useHome();

  return (
    <ContentWrapper>
      <h1 className='text-3xl text-primary font-bold'>Tasks to be accomplished</h1>
      <div className='flex justify-between items-center my-4'>
        <div className='flex items-center'>
          <p className='text-gray-500 mr-1'>Filter by</p>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Priority</InputLabel>
            <Select
              labelId="demo-select-small-label"
              value={filter}
              label="Priority"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
        </div>
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