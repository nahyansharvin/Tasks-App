import axios from 'axios';

const get = async (path, headers={}, params={} ) => {
    const response = await axios.get(
        path,
        { headers, params }
    );

    return response?.data;
};

const post = async (path, data={}, headers={}, params={} ) => {
    const response = await axios.post(
        path,
        data,
        { headers, params }
    );

    return response?.data;
};

const update = async (path, data={}, headers={}, params={} ) => {
    const response = await axios.put(
        path,
        data,
        { headers, params }
    );

    return response?.data;
};

const remove = async (path, headers={}, params={} ) => {
    const response = await axios.delete(
        path,
        { headers, params }
    );

    return response?.data;
};

const BackendService = {
    get,
    post,
    update,
    remove
};

export default BackendService;
