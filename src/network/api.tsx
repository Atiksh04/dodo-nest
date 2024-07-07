import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

// fetching user details
export const fetchUserData = async (userId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

// updating user details
export const updateUserData = async (userId: number, data: object) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}`, data, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};
