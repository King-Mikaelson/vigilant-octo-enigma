import { apiClientT } from "../axiosInstance";
import { AddItemProps } from "../types";

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

const importItem = async ({
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

const PosService = { addItem, getAllItems };

export default PosService;
