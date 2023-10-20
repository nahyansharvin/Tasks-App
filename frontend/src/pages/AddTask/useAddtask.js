import React, { useState } from 'react'
import { AddTask } from '../../services/TaskService';
import { Success } from '../../components/common/Toast';
import { useNavigate } from 'react-router';
import handleApiError from '../../utils/handleApiError';

export const useAddtask = () => {
    const navigate = useNavigate();

    async function handleAddTask(values) {
        try {
            await AddTask(values);
            Success('Task Added Successfully');
            navigate('/');
        } catch (err) {
            handleApiError(err);
        }
    }


    return { handleAddTask, navigate }
}
