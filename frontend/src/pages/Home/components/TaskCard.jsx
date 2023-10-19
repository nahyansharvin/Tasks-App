import React from 'react'
import Label from '../../../components/common/PriorityLabel/Label';
import formatTimestamp from '../../../utils/dateTimeFormatter';

//Material UI
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

//Icons
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router';


const TaskCard = ({id, title, body, priority, time, image, handleDelete}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/view/${id}`)
    }

    const handleEdit = (e) => {
        // navigate(`/edit/${id}`)
        e.stopPropagation();
    }

    const handleDeleteButton = (e) => {
        e.stopPropagation();
        handleDelete(id);
    }


    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-3 shadow-md transition duration-150 hover:shadow-2xl hover:scale-[1.005] cursor-pointer" onClick={handleCardClick}>
            {/* Image */}
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-slate-700 rounded-t lg:rounded-r-none lg:rounded-lg text-center overflow-hidden">
            </div>
            {/* Content */}
            <div className="w-full border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r-lg p-4 lg:p-5 flex flex-col justify-between leading-normal">
                <div className="mb-1">
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <Label priority={priority}/>
                            <p className='text-sm text-gray-600 flex items-center ml-2'>
                                <AccessTimeRoundedIcon className='mr-1' fontSize='12px' />
                                {formatTimestamp(time)}
                            </p>
                        </div>
                        <div className='z-50'>
                            <Button variant="outlined" size='small' startIcon={<EditIcon />} onClick={handleEdit}>
                                Edit
                            </Button>
                            <IconButton aria-label="delete" color='error' onClick={handleDeleteButton}>
                                <DeleteIcon />
                            </IconButton>
                        </div>

                    </div>

                    <div className="text-gray-900 font-bold text-xl mb-1">
                        {title}
                    </div>
                    <p className="text-gray-700 text-base line-clamp-2">{body}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskCard