import React, { useEffect, useState } from 'react'
import { DeleteTask, getTaskById } from '../../services/TaskService';
import handleApiError from '../../utils/handleApiError';
import { useNavigate, useParams } from 'react-router';
import { Success } from '../../components/common/Toast';

const useViewTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetchTaskbyId(id);
    }, [])

    async function fetchTaskbyId(id) {
        try {
            const task = await getTaskById(id);
            setTask(task[0]);
        } catch (err) {
            handleApiError(err);
        }
    }

    const handleDeleteButton = async () => {
        try {
            await DeleteTask(id);
            Success('Task deleted successfully');
            navigate('/');
        } catch (err) {
            handleApiError(err);
        }
    }

    const handleEditButton = () => {
        navigate(`/edit/${id}`);
    }

  return {task, handleDeleteButton, handleEditButton}
}

export default useViewTask