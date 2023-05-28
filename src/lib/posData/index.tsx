import { apiClientT } from "../axiosInstance";
import { AddItemProps, PlaceOrders } from "../types";

//CRUD OPERATIONS FOR POS
const addItem = async ({
  item_name,
  item_category,
  item_price,
}: AddItemProps) => {
  const response = await apiClientT.post<any>("/items/create", {
    item_name,
    item_category,
    item_price,
  });
  return response.data;
};

const importItems = async ({
  item_name,
  item_category,
  item_price,
}: AddItemProps) => {
  const response = await apiClientT.post<any>("/items/create", {
    item_name,
    item_category,
    item_price,
  });
  return response.data;
};

const getAllItems = async () => {
  const response = await apiClientT.get<any>("/items/all");
  return response.data;
};

//ORDERS
const placeOrder = async ({
  restaurant_id,
  username,
  order_items,
}: PlaceOrders) => {
  const response = await apiClientT.post("/orders/create", {
    restaurant_id,
    username,
    order_items,
  });
  return response.data;
};

const getOrder = async (order_id: string) => {
  const response = await apiClientT.get<any>("/orders/get");
  return response.data;
};

const getOrders = async (restaurant_id: string) => {
  const response = await apiClientT.get<any>("/orders/all");
  return response.data;
};

const PosService = {
  addItem,
  getAllItems,
  importItems,
  placeOrder,
  getOrder,
  getOrders,
};

export default PosService;
