// this place is where the user services code should be, but it seems to be missing. If you have any specific functionality or code you want to implement in the user services, please let me know and I can help you with that!
// where mapping the user services code, you can create functions that handle the business logic related to users, such as fetching user data from a database, creating new users, updating user information, etc. Here's an example of what the user services code might look like:
// where mapping of database colomun name is comes
// user service
import { getUsersRepo, createUserRepo, getUsersByRepo, } from "../repository/user-repository.js";
export const getUsersService = () => {
    const data = getUsersRepo(); // Example of user data fetched from the database
    //  map ,shape of reponse
    const response = {
        data: data,
        status: 200,
        message: "Success",
    };
    return response;
};
export const createUserService = (id) => {
    const data = createUserRepo(id); // Example of created user data
    // map ,shape of reponse
    const respones = {
        data: data,
        status: 201,
        message: "User created",
    };
    return respones;
};
export const getUsersByIdService = (user) => {
    const data = getUsersByRepo(user); // Example of created user data
    const response = {
        data: data,
        status: 200,
        message: "Success",
        error: [],
    };
    return response;
};
