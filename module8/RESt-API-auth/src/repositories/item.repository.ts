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
    isDeleted: false,
  },
  {
    id: 2,
    name: "Laptop",
    isInStore: true,
    numberInStore: 12,
    createAt: Date.UTC,
    updateAt: Date.UTC,
    isDeleted: false,
  },
  {
    id: 3,
    name: "Ipad",
    isInStore: true,
    numberInStore: 12,
    createAt: Date.UTC,
    updateAt: Date.UTC,
    isDeleted: false,
  },
];

export const getItemsRepo = () => {
  //Grab user list from Db

  // Grab items that are not deleted
  const data = items.filter((item) => !item.isDeleted);
  // const data = items;
  return data;
};

export const getItemByIdRepo = (id: any) => {
  //Get the user from db by Id
  // Check also if it is not deleted
  const data = items.find((item) => item.id == id);
  return data;
};

export const createItemRepo = (item: any) => {
  //Hit the Db
  //create the item
  //Get the Last Id
  //Create new Id by incremeting one on the last Id
  const id = items.length + 1;
  const createdItem = {
    ...item,
    id,
    createAt: Date.UTC,
    updateAt: Date.UTC,
    isDelete: false,
    delteAt: null,
  };

  items.push(createdItem);

  return createdItem;
};

export const updateItemRepo = (id: any, item: any) => {
  //Get the index
  //That is not deleted
  const index = items.findIndex((item) => item.id == id);
  // Update the updatedAt
  const updatedAt = Date.UTC;
  // Verify it is not repeated

  //Undate the data
  items[index] = { ...items[index], ...item, updatedAt };

  const data = items[index];

  return data;
};

export const deleteItemRepo = (id: any) => {
  //Grab the Data by Id

  const index = items.findIndex((item) => item.id == id);
  //Undate the isDeleted
  //Soft Delete
  const isDeleted = true;

  items[index] = { ...items[index], isDeleted };
  return items[index];
};
