import { STATUS_CODES } from "node:http";
import { getUsersService, createUserService, } from "../services/user-services.js";
export const getUsers = (req, res) => {
    const response = getUsersService();
    res.json(response);
};
export const createUser = (req, res) => {
    const user = req.body;
    const response = createUserService(user);
};
export const getUsersById = (req, res) => {
    const { id } = req.params;
    // const response = getUsersServiceById(id)
    console.log("Getting user with ID:", id);
    res.json({ id, name: "John Doe" });
    const response = {
        data: id,
        status: 200,
        message: "Success",
        STATUS_CODES: STATUS_CODES[200],
        error: [],
    };
};
