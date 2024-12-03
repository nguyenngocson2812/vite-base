import request from '../utils/httpRequest';

const TODOS_API = 'todos';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token'); 
    return { Authorization: `Bearer ${token}` };
};

const getAllTodos = async () => {
    try {
        const res = await request.get(TODOS_API); 
        return res.data.todoList;
    } catch (error) {
        console.error('Error getting todos:', error);
        throw error;
    }
};

const getTodoById = async (id) => {
    try {
        const res = await request.get(`${TODOS_API}/${id}`, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error getting todo by ID:', error);
        throw error;
    }
};

const createTodo = async (data) => {
    try {
        const res = await request.post(TODOS_API, data, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
};

const updateTodo = async (id, data) => {
    try {
        const res = await request.put(`${TODOS_API}/${id}`, data, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};

const deleteTodo = async (id) => {
    try {
        const res = await request.del(`${TODOS_API}/${id}`, {
            headers: getAuthHeaders(),
        });
        return res.data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};

const todoServices = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};

export default todoServices;
