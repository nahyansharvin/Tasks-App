import { useEffect, useState } from 'react'
import { getTasks } from '../../services/TaskService'
import handleApiError from '../../utils/handleApiError'

const useHome = () => {
    const [tasks, setTasks] = useState();

    useEffect(() => {
        async function fetchTasks() {
            try {
                const tasks = await getTasks();
                setTasks(tasks);
            } catch (err) {
                handleApiError(err);
            }
        }
        fetchTasks();
    }, []);

    return { tasks }
}

export default useHome