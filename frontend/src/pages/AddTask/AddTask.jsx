import React from 'react'
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper'
import Form from '../../components/UI/Form/Form'
import { Typography } from '@mui/material'

const AddTask = () => {
  return (
    <ContentWrapper>
      <Typography variant="h4" align="center" gutterBottom>
        Add New Task
      </Typography>
      <Form />
    </ContentWrapper>
  )
}

export default AddTask