export interface User {
  email: string;
  username: string;
  full_name: string;
  phone_number: string;
  role: string;
  password: string;
  works_at: string;
}

export interface Restaurant {
  business_name: string;
  business_address: string;
  mode: "SINGLE STORE" | "MULTI STORE";
}

export interface AddItemProps {
  item_name: string;
  item_category: string;
  item_price: string;
}

export interface OrderProps {
  item_name: string;
  item_category: string;
  item_price: string;
  quantity: string;
  amount: string;
}

export interface PlaceOrders {
  restaurant_id: string;
  username: string;
  order_items: OrderProps[];
}
