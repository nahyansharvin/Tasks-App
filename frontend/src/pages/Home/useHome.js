import { useEffect, useState } from 'react'
import { DeleteTask, getTasks } from '../../services/TaskService'
import handleApiError from '../../utils/handleApiError'
import { Success } from '../../components/common/Toast';

const useHome = () => {
    const [tasks, setTasks] = useState();
    const [filteredTasks, setFilteredTasks] = useState();
    const [filter, setFilter] = useState('none');

    async function fetchTasks() {
        try {
            const tasks = await getTasks();
            setTasks(tasks);
            setFilteredTasks(tasks);
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

    //Filter tasks by priority
    useEffect(() => {
        if (filter === 'none') {
            setFilteredTasks(tasks);
        } else {
            const filteredTasks = tasks?.filter((task) => task.priority === filter);
            setFilteredTasks(filteredTasks);
        }
    }, [filter]);

    useEffect(() => {
        fetchTasks();
    }, []);

    return { tasks:filteredTasks, handleDelete, filter, setFilter }
}

export default useHome