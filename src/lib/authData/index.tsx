import { apiClient } from "../axiosInstance";
import { Restaurant, User } from "../types";

//CRUD OPERATIONS FOR USERS
//Creates Restaurant
const createRestaurant = async (
  parent_restaurant_id: "",
  { business_address, business_name, mode }: Restaurant | any
) => {
  const response = await apiClient.post<any>("/restaurant/create", {
    parent_restaurant_id,
    business_address,
    business_name,
    mode,
  });
  return response.data;
};

//Creates User
const createUser = async ({
  email,
  username,
  full_name,
  phone_number,
  role,
  password,
  works_at,
}: User | any) => {
  const response = await apiClient.post<any>("/users/create-user", {
    email,
    username,
    full_name,
    phone_number,
    role,
    password,
    works_at,
  });
  return response.data;
};

//Sends OTP
const sendOTP = async (email: string) => {
  const response = await apiClient.post<any>("/send-otp", {
    email,
  });
  return response.data;
};

//Resend OTP
const resendOTP = async (email: string) => {
  const response = await apiClient.post<any>("/resend-otp", {
    email,
  });
  return response.data;
};

//Verify OTP
const verifyOTP = async (email: string, user_otp: string) => {
  const response = await apiClient.post<any>("/verify-user-otp", {
    email,
    user_otp,
  });
  return response.data;
};

//Login User
const loginUser = async (email: string, password: string) => {
  const response = await apiClient.post<any>("/users/login", {
    email,
    password,
  });
  return response.data;
};

const AuthService = {
  createRestaurant,
  createUser,
  sendOTP,
  resendOTP,
  verifyOTP,
  loginUser,
};

export default AuthService;
