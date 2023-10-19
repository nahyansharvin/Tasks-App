import {Error} from "../components/common/Toast";

const handleApiError = (err) => {
    if (err.message) return Error(err.message);
    return Error("Oops! Something went wrong.");
};

export default handleApiError;
