// Define the type for the state
export type State = {
  fullname: string;
  username: string;
  email: string;
  phone_number: string;
  business_name: string;
  business_address: string;
  password: string;
};

// Define the type for the actions
type Action =
  | { type: "SET_FULL_NAME"; payload: string }
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_BUSINESS_NAME"; payload: string }
  | { type: "SET_BUSINESS_ADDRESS"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_STATE"; payload: State }
  | any;

// Initial state for the input form
export const initialState: State = {
  fullname: "",
  username: "",
  email: "",
  phone_number: "",
  business_name: "",
  business_address: "",
  password: "",
};

// Reducer function to handle state updates
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FULL_NAME":
      return { ...state, fullname: action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone_number: action.payload };
    case "SET_BUSINESS_NAME":
      return { ...state, business_name: action.payload };
    case "SET_BUSINESS_ADDRESS":
      return { ...state, business_address: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_STATE": // Handle SET_STATE action
      return { ...action.payload };
    default:
      return state;
  }
};
