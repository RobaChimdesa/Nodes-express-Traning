import { getItemsService, getItemByIdService, createItemService, updateItemService, deleteItemService } from "../services/item.service";
export const getItems = (req, res) => {
    const response = getItemsService();
    res.json(response);
};
export const getItemById = (req, res) => {
    const { id } = req.params;
    const response = getItemByIdService(id);
    res.json(response);
};
export const createItem = (req, res) => {
    const item = req.body;
    const response = createItemService(item);
    res.status(201).json(response);
};
export const updateItem = (req, res) => {
    const item = req.body;
    const { id } = req.params;
    const response = updateItemService(id, item);
    res.status(200).json(response);
};
export const deleteItem = (req, res) => {
    const { id } = req.params;
    const response = deleteItemService(id);
    res.status(204).json(response);
};
