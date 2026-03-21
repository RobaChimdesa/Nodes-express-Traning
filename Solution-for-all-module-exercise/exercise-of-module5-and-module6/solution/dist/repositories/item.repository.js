//item repo 
//Data Here
const items = [
    {
        id: 1,
        name: "Desktop",
        isInStore: true,
        amountInStore: 12,
        createAt: Date.UTC,
        updateAt: Date.UTC,
        isDelete: false,
        delteAt: null
    },
    {
        id: 2,
        name: "Laptop",
        isInStore: true,
        numberInStore: 12,
        createAt: Date.UTC,
        updateAt: Date.UTC,
        isDelete: false,
        delteAt: null
    },
    {
        id: 3,
        name: "Ipad",
        isInStore: true,
        numberInStore: 12,
        createAt: Date.UTC,
        updateAt: Date.UTC,
        isDelete: false,
        delteAt: null
    }
];
export const getItemsRepo = () => {
    //Grab user list from Db
    const data = items;
    return data;
};
export const getItemByIdRepo = (id) => {
    //Get the user from db by Id
    // Check also if it is not deleted 
    const data = items.find(item => item.id == id);
    return data;
};
export const createItemRepo = (item) => {
    //Hit the Db
    //create the item
    //Get the Last Id 
    //Create new Id by incremeting one on the last Id
    // check the item name is unique
    const id = 4;
    const createdItem = {
        ...item,
        id,
        createAt: Date.UTC,
        updateAt: Date.UTC,
        isDelete: false,
        delteAt: null
    };
    items.push(item);
    return item;
};
export const updateItemRepo = (id, item) => {
    //Get the index 
    //That is not deleted 
    const index = items.findIndex(item => item.id === id);
    // Verify it is not repeated 
    // Update the updatedAt
    //Undate the data
    items[index] = { ...items[index], ...item };
    const data = items[index];
    return data;
};
export const deleteItemRepo = (id) => {
    //Grab the Data by Id
    //Get the ID
    //pop it 
    // soft delete  == 
    // isDelete : false,
    // delteAt : Date.UTC
    const filtedData = items.filter(item => item.id !== id);
    return filtedData;
};
