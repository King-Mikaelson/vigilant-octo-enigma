import { apiClient } from "../axiosInstance";
import { HeroType } from "../types";

//CRUD OPERATIONS FOR USERS
const findAll = async () => {
  const response = await apiClient.get<HeroType[]>("/superheroes");
  return response.data;
};

const findById = async (id: any) => {
  const response = await apiClient.get<HeroType>(`/superheroes/${id}`);
  return response.data;
};

const create = async ({ name, alterEgo }: HeroType) => {
  const response = await apiClient.post<any>("/superheroes", {
    name,
    alterEgo,
  });
  return response.data;
};

const update = async (id: any, { name, alterEgo }: HeroType) => {
  const response = await apiClient.put<any>(`/superheroes/${id}`, {
    name,
    alterEgo,
  });
  return response.data;
};

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`/superheroes/${id}`);
  return response.data;
};

const deleteAll = async () => {
  const response = await apiClient.delete<any>("/superheroes");
  return response.data;
};

const AuthService = {
  findAll,
  findById,
  create,
  update,
  deleteById,
  deleteAll,
};

export default AuthService;
