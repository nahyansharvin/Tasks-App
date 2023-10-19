import { useEffect, useState } from 'react'
import { DeleteTask, getTasks } from '../../services/TaskService'
import handleApiError from '../../utils/handleApiError'
import { Success } from '../../components/common/Toast';

const useHome = () => {
    const [tasks, setTasks] = useState();
    async function fetchTasks() {
        try {
            const tasks = await getTasks();
            setTasks(tasks);
        } catch (err) {
            handleApiError(err);
        }
    }

    async function handleDelete(id) {
        try {
            await DeleteTask(id);
            Success('Task deleted successfully');
            fetchTasks();
        } catch (err) {
            handleApiError(err);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return { tasks, handleDelete }
}

export default useHome