import getBackendPath from "../utils/getBackendPath";
import BackendService from "./BackendService";

export const getTasks = async () => {
    return BackendService.get(getBackendPath('/tasks'));
}

export const getTaskById = async (id) => {
    return BackendService.get(getBackendPath(`/tasks/${id}`));
}

export const AddTask = async (data) => {
    return BackendService.post(getBackendPath('/tasks'), data);
}

export const UpdateTask = async (id, data) => {
    return BackendService.update(getBackendPath(`/tasks/${id}`), data);
}

export const DeleteTask = async (id) => {
    return BackendService.remove(getBackendPath(`/tasks/${id}`));
}