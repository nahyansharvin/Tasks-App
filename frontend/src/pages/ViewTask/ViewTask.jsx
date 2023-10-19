import React from 'react'
import ContentWrapper from '../../components/common/Wrapper/ContentWrapper'
import { useNavigate } from 'react-router';
import useViewTask from './useViewTask';
import Label from '../../components/common/PriorityLabel/Label';
import formatTimestamp from '../../utils/dateTimeFormatter';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';


const Viewtask = () => {
    const navigate = useNavigate();
    const { task, handleEditButton, handleDeleteButton } = useViewTask();
    if (!task) return null;

    return (
        <ContentWrapper classNames="p-0 lg:p-auto lg:p-10 lg:flex justify-center">
            <div className='lg:bg-white lg:w-4/6 lg:max-w-3xl lg:rounded-xl lg:shadow-lg lg:overflow-hidden'>
                {/* Image */}
                <div className="h-48 flex-none bg-cover bg-slate-700 text-center overflow-hidden relative">
                    <div className='absolute top-1 px-2 w-full flex justify-between'>
                        <IconButton aria-label="back" size='large' color='primary' onClick={() => navigate("/")}>
                            <ArrowBackIcon />
                        </IconButton>
                        <div className=''>
                            <Button variant="contained" size='small' startIcon={<EditIcon />} onClick={handleEditButton}>
                                Edit
                            </Button>
                            <IconButton aria-label="delete" color='error' onClick={handleDeleteButton}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                    <img src={task?.image} alt={task?.title} className='object-cover h-full w-full' />
                </div>
                {/* Content */}
                <div className='p-10'>
                    <div className='flex items-center mb-3'>
                        <Label priority={task?.priority} />
                        <p className='text-sm text-gray-600 flex items-center ml-2'>
                            <AccessTimeRoundedIcon className='mr-1' fontSize='12px' />
                            {formatTimestamp(task?.created_at)}
                        </p>
                    </div>
                    <h1 className='text-3xl mb-2'>
                        {task?.title}
                    </h1>
                    <p className='text-gray-500'>
                        {task?.description}
                    </p>
                </div>

            </div>
        </ContentWrapper>
    )
}

export default Viewtask