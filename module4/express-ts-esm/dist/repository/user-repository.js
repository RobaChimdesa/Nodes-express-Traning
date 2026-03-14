export const getUsersRepo = () => {
    //    grab user data from the database and return it to the controller
    const data = [{ id: 1, name: "John Doe" }]; // Example of user data fetched from the database
    return data;
    const response = {
        data: [{ id: 1, name: "John Doe" }],
        status: 200,
        message: "Success",
    };
    return response;
};
export const createUserRepo = (id) => {
    // get the user data by id from the database and create the user with the provided id
    const data = { id, name: "John Doe" }; // Example of created user data
    const respones = {
        data: id,
        status: 201,
        message: "User created",
    };
    return respones;
};
export const getUsersByRepo = (user) => {
    // hit the database and create the user with the provided id
    //  const data = { id, name: "John Doe" }; // Example of created user data
    const data = user;
    const response = {
        data: user,
        status: 200,
        message: "Success",
        error: [],
    };
    return response;
};
