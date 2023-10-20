import React from 'react'
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper'
import Form from '../../components/UI/Form/Form'
import useUpdatetask from './useUpdatetask'

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const UpdateTask = () => {
  const { task, handleUpdateTask, navigate } = useUpdatetask();

  return (
    <ContentWrapper>
      <IconButton aria-label="back" size='large' color='primary' onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
      <h1 className='w-full flex justify-center text-4xl font-medium mb-4' >
        Update Task
      </h1>
      <Form task={task} edit={true} handleSubmit={handleUpdateTask} />
    </ContentWrapper>
  )
}

export default UpdateTask