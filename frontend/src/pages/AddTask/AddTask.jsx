import React from 'react'
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper'
import Form from '../../components/UI/Form/Form'
import { useAddtask } from './useAddtask'

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const AddTask = () => {
  const { handleAddTask, navigate } = useAddtask();
  return (
    <ContentWrapper>
      <IconButton aria-label="back" size='large' color='primary' onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
      <h1 className='w-full flex justify-center text-4xl font-medium mb-4' >
        Add New Task
      </h1>
      <Form handleSubmit={handleAddTask} />
    </ContentWrapper>
  )
}

export default AddTask