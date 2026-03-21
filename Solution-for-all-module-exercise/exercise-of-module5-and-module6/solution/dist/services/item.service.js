//user service 
import { getItemsRepo, getItemByIdRepo, createItemRepo, updateItemRepo, deleteItemRepo } from "../repositories/item.repository";
export const getItemsService = () => {
    const data = getItemsRepo();
    //Map , shape of reponse 
    const response = {
        data: data,
        status: "sucess",
        message: "Date retrived succssfully!",
        statusCode: 200,
        error: null
    };
    return response;
};
export const getItemByIdService = (id) => {
    const data = getItemByIdRepo(id);
    //Map , shape of reponse 
    const response = {
        data: data,
        status: "sucess",
        message: "Date retrived succssfully!",
        statusCode: 200,
        error: null
    };
    return response;
};
export const createItemService = (user) => {
    const data = createItemRepo(user);
    //Map , shape of reponse 
    const response = {
        data: data,
        status: "sucess",
        message: "User created!",
        statusCode: 201,
        error: null
    };
    return response;
};
export const updateItemService = (id, item) => {
    const data = updateItemRepo(id, item);
    //Map , shape of reponse 
    const response = {
        data: data,
        status: "sucess",
        message: "User Updated!",
        statusCode: 201,
        error: null
    };
    return response;
};
export const deleteItemService = (id) => {
    const data = deleteItemRepo(id);
    //Map , shape of reponse 
    const response = {
        data: data,
        status: "sucess",
        message: "User Deleted!",
        statusCode: 204,
        error: null
    };
    return response;
};
