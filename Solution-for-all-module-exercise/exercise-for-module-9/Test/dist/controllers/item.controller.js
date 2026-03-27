import { getItemsService, getItemByIdService, createItemService, updateItemService, deleteItemService, } from '../services/item.service';
export const getItems = async (_req, res) => {
    try {
        const response = await getItemsService();
        res.json(response);
    }
    catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
};
export const getItemById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const response = await getItemByIdService(id);
        res.json(response);
    }
    catch (err) {
        const status = err.message.includes('not found') ? 404 : 500;
        res.status(status).json({ status: 'error', message: err.message });
    }
};
export const createItem = async (req, res) => {
    try {
        const response = await createItemService(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
};
export const updateItem = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const response = await updateItemService(id, req.body);
        res.json(response);
    }
    catch (err) {
        const status = err.message.includes('not found') ? 404 : 400;
        res.status(status).json({ status: 'error', message: err.message });
    }
};
export const deleteItem = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const response = await deleteItemService(id);
        res.status(204).json(response);
    }
    catch (err) {
        const status = err.message.includes('not found') ? 404 : 500;
        res.status(status).json({ status: 'error', message: err.message });
    }
};
