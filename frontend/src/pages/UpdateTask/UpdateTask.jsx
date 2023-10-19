import React from 'react'
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper'
import Form from '../../components/UI/Form/Form'
import { Typography } from '@mui/material'
import useUpdatetask from './useUpdatetask'


const UpdateTask = () => {
  const { task, handleUpdateTask } = useUpdatetask();

  return (
    <ContentWrapper>
      <h1 className='w-full flex justify-center text-4xl font-medium mb-4' >
        Update Task
      </h1>
      <Form task={task} edit={true} handleSubmit={handleUpdateTask} />
    </ContentWrapper>
  )
}

export default UpdateTask