import axiosInstance from './axiosInstance'; // Import axiosInstance

// login
export const loginUser = async (email, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// register
export const registerUser = async (email, password, fullName) => {
    try {
        const response = await axiosInstance.post('/register', { email, password, fullName });
        return response.data; // Trả về dữ liệu từ API
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Ném lỗi nếu có
    }
};

// getUserProfile
export const getUserProfile = async (userId) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}`);
        return response.data; // Trả về dữ liệu từ API
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error; // Ném lỗi nếu có
    }
};
