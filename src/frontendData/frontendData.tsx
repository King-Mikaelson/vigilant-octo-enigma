type Menu = {
  name: string;
};
type Table = {
  orderNo: string;
  menu: Menu[];
  totalPayment: Number;
};


type FilterTable = {
  name: string;
  price:Number
  quantity: string;
  subTotal: Number;
};

type Sides = {
  name: string;
  order: string;
};

export const orders: Sides[] = [
  {
    name: "Salted Pasta with mushroom sauce",
    order: "150 orders",
  },
  {
    name: "Hot spicy fried rice",
    order: "126 orders",
  },
  {
    name: "Robertson sweet wine",
    order: "150 orders",
  },
  {
    name: "Chivita",
    order: "126 orders",
  },
  {
    name: "Salted Pasta with mushroom sauce",
    order: "150 orders",
  },
];

export const table: Table[] = [
  {
    orderNo: "#000010",
    menu: [
      { name: "Salted Pasta with mushroom sauce" },
      { name: "Robertson sweet wine" },
    ],
    totalPayment: 12000,
  },
  {
    orderNo: "#000009",
    menu: [
      { name: "Hot spicy fried rice " },
      { name: "Fanta" },
      { name: "Chivita" },
    ],
    totalPayment: 4000,
  },
  {
    orderNo: "#000008",
    menu: [
      { name: "Salted Pasta with mushroom sauce" },
      { name: "Robertson sweet wine" },
    ],
    totalPayment: 12000,
  },
  {
    orderNo: "#000007",
    menu: [
      { name: "Hot spicy fried rice " },
      { name: "Fanta" },
      { name: "Chivita" },
    ],
    totalPayment: 4000,
  },

  {
    orderNo: "#000006",
    menu: [
      { name: "Salted Pasta with mushroom sauce" },
      { name: "Robertson sweet wine" },
    ],
    totalPayment: 12000,
  },
  {
    orderNo: "#000005",
    menu: [
      { name: "Hot spicy fried rice " },
      { name: "Fanta" },
      { name: "Chivita" },
    ],
    totalPayment: 4000,
  },

  {
    orderNo: "#000004",
    menu: [
      { name: "Salted Pasta with mushroom sauce" },
      { name: "Robertson sweet wine" },
    ],
    totalPayment: 12000,
  },
  {
    orderNo: "#000003",
    menu: [
      { name: "Hot spicy fried rice " },
      { name: "Fanta" },
      { name: "Chivita" },
    ],
    totalPayment: 4000,
  },

  {
    orderNo: "#000002",
    menu: [
      { name: "Salted Pasta with mushroom sauce" },
      { name: "Robertson sweet wine" },
    ],
    totalPayment: 12000,
  },
  {
    orderNo: "#000001",
    menu: [
      { name: "Hot spicy fried rice " },
      { name: "Fanta" },
      { name: "Chivita" },
    ],
    totalPayment: 4000,
  },
];

export const filterTable: FilterTable[] = [
  {
    name: "Salted Pasta with mushroom sauce",
    price: 10000,
    quantity: "2",
    subTotal: 20000,
  },
  {
    name: "Robertson sweet wine",
    price: 2000,
    quantity: "1",
    subTotal: 2000,
  },
  {
    name: "Hot spicy fried rice",
    price: 10000,
    quantity: "2",
    subTotal: 20000,
  },
  {
    name: "Fanta",
    price: 2000,
    quantity: "1",
    subTotal: 2000,
  },
  {
    name: "Chivita",
    price: 2000,
    quantity: "1",
    subTotal: 2000,
  },
  {
    name: "Salted Pasta with mushroom sauce",
    price: 10000,
    quantity: "2",
    subTotal: 20000,
  },
  {
    name: "Robertson sweet wine",
    price: 2000,
    quantity: "1",
    subTotal: 2000,
  },
  {
    name: "Hot spicy fried rice",
    price: 10000,
    quantity: "2",
    subTotal: 20000,
  },
  {
    name: "Fanta",
    price: 2000,
    quantity: "1",
    subTotal: 2000,
  },
  {
    name: "Chivita",
    price: 2000,
    quantity: "1",
    subTotal: 2000,
  },
  {
    name: "Salted Pasta with mushroom sauce",
    price: 10000,
    quantity: "2",
    subTotal: 20000,
  }

]




type Card = {
  title: string;
  amount: Number;
};

export const card: Card[] = [
  {
    title: "Total Orders",
    amount: 40,
  },
  {
    title: "Total Revenue",
    amount: 148800,
  },

  { title: "Cash Payments", amount: 1700 },
  { title: "POS Payments", amount: 118500 },
  { title: "Transfer Payments", amount: 28600 },
];

export interface Store {
  id: string;
  name: string;
  price: string;
  category: string;
}

export const active: any = {
  "0": "All",
  "1": "Meals",
  "2": "Drinks",
  "3": "Pastries",
  "4": "Sides",
  "5": "Grills",
  "6": "Desserts",
};

export const Stock: Store[] = [
  {
    id: "1",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "2",
    name: "Salted with Rice pasta",
    price: "10000",
    category: "Wine",
  },
  {
    id: "3",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "4",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "5",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "6",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "7",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "8",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "9",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "10",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "11",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "12",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "13",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "14",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "15",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "16",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "17",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "18",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "19",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "20",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "21",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "22",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "23",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "24",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "25",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "26",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "27",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
  {
    id: "28",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Meals",
  },
  {
    id: "29",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Wine",
  },
  {
    id: "30",
    name: "Salted Pasta with mushroom sauce",
    price: "10000",
    category: "Desserts",
  },
];

interface Product {
  id: string;
  name: string;
}

export const Items: Product[] = [
  {
    id: "1",
    name: "All",
  },
  {
    id: "2",
    name: "Meals",
  },
  {
    id: "3",
    name: "Drinks",
  },
  {
    id: "4",
    name: "Pastries",
  },
  {
    id: "5",
    name: "Sides",
  },
  {
    id: "6",
    name: "Grills",
  },
  {
    id: "7",
    name: "Desserts",
  },
];
