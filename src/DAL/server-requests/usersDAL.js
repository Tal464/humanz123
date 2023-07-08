import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/users"
});

export const fetchData = async (pageNumber, numberOfRowsToFetch, filterHValue) => {
    try {
        const response = await axiosInstance.post(`/fetch?pageNumber=${pageNumber}&numberOfRowsToFetch=${numberOfRowsToFetch}&filterValue=${filterHValue}`);
        // const response2 = await axiosInstance.post(`/getNumber?filterValue=${filterHValue}`);
        return response.data;
    } catch (error) {
        // console.error(er
        return null;
    }
};

export const addUser = async (pageNumber, numberOfRowsToFetch, filterHValue) => {
    try {
        const response = await axiosInstance.post(`/fetch?pageNumber=${pageNumber}&numberOfRowsToFetch=${numberOfRowsToFetch}&filterValue=${filterHValue}`);
        // const response2 = await axiosInstance.post(`/getNumber?filterValue=${filterHValue}`);
        return response.data;
    } catch (error) {
        // console.error(er
        return null;
    }
};
