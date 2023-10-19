import getBackendPath from "../utils/getBackendPath";
import BackendService from "./BackendService";

export const getTasks = async () => {
    return BackendService.get(getBackendPath('/tasks'));
}

