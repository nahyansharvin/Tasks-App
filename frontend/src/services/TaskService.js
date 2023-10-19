import getBackendPath from "../utils/getBackendPath";
import BackendService from "./BackendService";

export const getTasks = async () => {
    return BackendService.get(getBackendPath('/tasks'));
}

export const AddTask = async (data) => {
    return BackendService.post(getBackendPath('/tasks'), data);
}