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


const TaskCard = ({id, title, body, priority, time, image, handleDelete}) => {
   

    return (
        <div class="max-w-sm w-full lg:max-w-full lg:flex mb-3">
            {/* Image */}
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-slate-900 rounded-t lg:rounded-r-none lg:rounded-lg text-center overflow-hidden">
            </div>
            {/* Content */}
            <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r-lg p-4 lg:p-5 flex flex-col justify-between leading-normal">
                <div className="mb-1">
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <Label priority={priority}/>
                            <p className='text-sm text-gray-600 flex items-center ml-2'>
                                <AccessTimeRoundedIcon className='mr-1' fontSize='12px' />
                                {formatTimestamp(time)}
                            </p>
                        </div>
                        <div className=''>
                            <Button variant="outlined" size='small' startIcon={<EditIcon />}>
                                Edit
                            </Button>
                            <IconButton aria-label="delete" color='error' onClick={() => handleDelete(id)}>
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