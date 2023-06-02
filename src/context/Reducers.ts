import { CartTypes, Store } from '../frontendData/frontendData';

export type State = {
  items: Store[];
  cart: CartTypes[];
  fromCatalogue: CartTypes[];
};

// Define the type for the actions
type Action =
  | { type: 'INITIALIZE_CART'; payload: any }
  | { type: 'ADD_TO_CART'; payload: any }
  | { type: 'INCREMENT_QTY'; payload: any }
  | { type: 'DECREMENT_QTY'; payload: any }
  | { type: 'REMOVE_FROM_CART'; payload: any }
  | { type: 'CLEAR_ITEMS'; payload: any }
  | { type: 'CLEAR_CART'; payload: any }
  | { type: 'ADD_TO_CATALOGUE'; payload: any }
  | { type: 'REMOVE_FROM_CATALOGUE'; payload: any }
  | { type: 'CLEAR_CATALOGUE'; payload: any }
  | any;

// Initial state for the input form
export const initialState: State = {
  items: [],
  cart: [],
  fromCatalogue: [],
};

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INITIALIZE_CART':
      return action.payload;
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case 'INCREMENT_QTY':
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.item_name === action.payload.item_name
            ? { ...x, quantity: x.quantity + 1 }
            : x
        ),
      };
    case 'DECREMENT_QTY':
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.item_name === action.payload.item_name
            ? {
                ...x,
                quantity: x.quantity > 1 ? x.quantity - 1 : (x.quantity = 1),
              }
            : x
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart?.filter(
          (c) => c.item_name !== action.payload.item_name
        ),
      };

    case 'CLEAR_ITEMS':
      return {
        ...state,
        items: [],
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    //Catalogue actions
    case 'ADD_TO_CATALOGUE':
      return {
        ...state,
        fromCatalogue: [
          ...state.fromCatalogue,
          { ...action.payload, quantity: 1 },
        ],
      };
    case 'REMOVE_FROM_CATALOGUE':
      return {
        ...state,
        fromCatalogue: state.fromCatalogue?.filter(
          (c) => c.item_name !== action.payload.item_name
        ),
      };
    case 'CLEAR_CATALOGUE':
      return {
        ...state,
        fromCatalogue: [],
      };
    default:
      return state;
  }
};
