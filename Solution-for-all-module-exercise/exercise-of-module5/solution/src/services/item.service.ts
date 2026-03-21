//user service
import {
  getItemsRepo,
  getItemByIdRepo,
  createItemRepo,
  updateItemRepo,
  deleteItemRepo,
} from "../repositories/item.repository";

interface GetItemsOptions {
  page?: number;
  limit?: number;
  nameFilter?: string;
  inStoreFilter?: boolean;
  sort?: string;
}

export const getItemsService = (options: GetItemsOptions = {}) => {
  const { page = 1, limit = 10, nameFilter, inStoreFilter, sort } = options;

  // Get all non-deleted items from repo
  let items = getItemsRepo();

  // 1. Apply name filter (case-insensitive partial match)
  if (nameFilter) {
    const search = nameFilter.toLowerCase();
    items = items.filter((item) => item.name.toLowerCase().includes(search));
  }

  // 2. Apply inStore filter
  if (inStoreFilter !== undefined) {
    items = items.filter((item) => item.isInStore === inStoreFilter);
  }

  // 3. Sorting (very basic)
  if (sort) {
    const [field, direction] = sort.startsWith("-")
      ? [sort.slice(1), "desc"]
      : [sort, "asc"];

    items = [...items].sort((a: any, b: any) => {
      if (direction === "desc") {
        return b[field] > a[field] ? 1 : -1;
      }
      return a[field] > b[field] ? 1 : -1;
    });
  }

  // 4. Pagination
  const total = items.length;
  const skip = (page - 1) * limit;
  const paginatedItems = items.slice(skip, skip + limit);

  // 5. Build nice RESTful response
  const response = {
    status: "success",
    message: "Items retrieved successfully",
    data: paginatedItems,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit) || 1,
      hasNext: skip + limit < total,
      hasPrev: page > 1,
    },
  };

  return response;
};

export const getItemByIdService = (id: any) => {
  const data = getItemByIdRepo(id);

  //Map , shape of reponse
  const response = {
    data: data,
    status: "sucess",
    message: "Date retrived succssfully!",
    statusCode: 200,
    error: null,
  };
  return response;
};

export const createItemService = (user: any) => {
  const data = createItemRepo(user);

  //Map , shape of reponse
  const response = {
    data: data,
    status: "sucess",
    message: "User created!",
    statusCode: 201,
    error: null,
  };

  return response;
};

export const updateItemService = (id: any, item: any) => {
  const data = updateItemRepo(id, item);

  //Map , shape of reponse
  const response = {
    data: data,
    status: "sucess",
    message: "User Updated!",
    statusCode: 201,
    error: null,
  };

  return response;
};

export const deleteItemService = (id: any) => {
  const data = deleteItemRepo(id);

  //Map , shape of reponse
  const response = {
    data: data,
    status: "sucess",
    message: "User Deleted!",
    statusCode: 204,
    error: null,
  };

  return response;
};
