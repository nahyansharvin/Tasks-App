import BACKEND_URL from "../constants/BACKEND_KEYS";

const getBackendPath = (path) => `${BACKEND_URL}${path}`;
export default getBackendPath;