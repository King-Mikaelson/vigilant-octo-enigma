//LAYOUT TYPE
export type ChildrenProp = {
  children: React.ReactNode;
};

//BACKEND DATA TYPE EXAMPLE
export type HeroType = {
  id: number;
  name: string;
  alterEgo: string;
};

export interface UserListProps {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  action: string;
}
