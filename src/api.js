import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getSprints = async () => {
    const response = await axios.get(`${API_BASE_URL}/sprints`);
    return response.data;
};

export const addSprint = async (sprint) => {
    const response = await axios.post(`${API_BASE_URL}/sprints`, sprint);
    return response.data;
};

export const getTasks = async () => {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
};

export const addTask = async (task, sprintId) => {
    const response = await axios.post(`${API_BASE_URL}/tasks/${sprintId}`, task);
    return response.data;
};
