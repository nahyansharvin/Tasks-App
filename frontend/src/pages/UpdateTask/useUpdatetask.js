import { useEffect, useState } from 'react'
import { UpdateTask, getTaskById } from '../../services/TaskService';
import handleApiError from '../../utils/handleApiError';
import { useNavigate, useParams } from 'react-router';
import { Success } from '../../components/common/Toast';


const useUpdatetask = () => {
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

    async function handleUpdateTask(values) {
        try {
            await UpdateTask(id, values);
            Success('Task Updated Successfully');
            navigate('/');
        } catch (err) {
            handleApiError(err);
        }
    }

    return {task, handleUpdateTask, navigate}
}

export default useUpdatetask