import axios from "axios";

export const getRate = async(path) => {
        const response = await axios.get(path);
        return response.data;
};